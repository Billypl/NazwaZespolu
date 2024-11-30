from config import *
import json
import sys
import requests
from bs4 import BeautifulSoup


def extract_product_info(product_url, special_categories_product_list):
    response = requests.get(product_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    product_info = {}
    # Information about product is located in 4th script tag
    product_info_script = soup.find('footer').find_all('script', type='application/ld+json')[3]

    if product_info_script:
        try:
            json_data = json.loads(product_info_script.string)
        except json.JSONDecodeError as e:
            return None


        # Extract important information
        product_info = {
            "name": json_data.get("name", ""),
            # "description": json_data.get("description", ""),
            "productID": json_data.get("productID", "").replace("mpn:", ""), # Don't know if it should stay with mpn: or not
            "categories": {},
            "special_categories": [],
            "properties": [],
            "rating": json_data.get("aggregateRating", {}).get("ratingValue", None),
            "rating_count": json_data.get("aggregateRating", {}).get("reviewCount", None),  
            "reviews": [],
            "offers": [],
            "images": []
        }
        

        # Extract individual reviews
        reviews = json_data.get("review", [])
        for review in reviews:
            review_details = {
                "author": review.get("author", {}).get("name", ""),
                "description": review.get("description", ""),
                "rating": review.get("reviewRating", {}).get("ratingValue", None)
            }
            product_info["reviews"].append(review_details)

        # Extract offer details
        offers = json_data.get("offers", [])
        for offer in offers:
            offer_details = {
                # "availability": offer.get("availability", ""),
                # "url": offer.get("url", ""),
                "price": offer.get("price", ""),
                # "eligibleQuantity": offer.get("eligibleQuantity", {}).get("value", ""),
            }

            hasSpecs = False

            # Extract price specifications
            price_specifications = offer.get("priceSpecification", [])
            for spec in price_specifications:
                offer_details = {}
                hasSpecs = True
                offer_details["price"] = spec.get("price", "")
                # offer_details["valid_through"] = spec.get("validThrough", "")
                product_info["offers"].append(offer_details)

            if not hasSpecs:
                product_info["offers"].append(offer_details)
    else:
        log_message(f"Coudn't find product info script: {product_url}")
        return None

    # Extract product categories
    breadcrumbs_navigation = soup.find('div', id='breadcrumbs')
    if breadcrumbs_navigation:
        breadcrumbs_list = breadcrumbs_navigation.find('ol')

        breadcrumbs_elements = breadcrumbs_list.find_all('li', recursive=False)

        categories = {}
        
        for index, category in enumerate(breadcrumbs_elements[2:-1], start=1):
            categories[f'level{index}'] = category.find('a').get_text()
        product_info['categories'] = categories
    else:
        log_message(f"Coudn't find any categories: {product_url}")
        return None
        
    # Set special product categories
    product_info["special_categories"] = []
    for special_category_name, product_list in special_categories_product_list.items():
        if product_url in product_list:
            product_info["special_categories"].append(special_category_name)
        

    # Extract product properties
    projector_dictionary = soup.find('section', id='projector_dictionary').find('div')
    if projector_dictionary:
        product_properties_list = projector_dictionary.find_all('div', recursive=False)

        product_properties = []
        for product_property in product_properties_list:
            spans = product_property.find_all('span', recursive=True)
            product_properties.append({
                "type": spans[0].get_text(),
                "value": spans[1].get_text()
            })
        product_info['properties'] = product_properties

    else:
        log_message(f"Coudn't find any product properties: {product_url}")
        return None


    # Extract photos links
    photos_slider_div = soup.find('div', id='photos_slider')
    if photos_slider_div:

        # Iterate over all figure tags within the div
        for figure in photos_slider_div.find_all('figure'):
            # Find the img tag within the figure
            img_tag = figure.find('img')
            
            if img_tag and 'src' in img_tag.attrs:
                img_src = img_tag['src']
                size_chars = ['s', 'm', 'l']

                
                product_info['images'].append(
                    PASART_URL + img_src[:IMAGE_SIZE_LINK_INDEX] + size_chars[2] + img_src[IMAGE_SIZE_LINK_INDEX + 1:]
                )
                
                """
                # Generate medium and full-size image sources by replacing the size character
                sizes = ['thumbnail', 'medium', 'full_size']
                size_chars = ['s', 'm', 'l']
                
                for i in range(len(sizes)):
                    product_info['images'].append(
                        {
                            "size": sizes[i],
                            "data-src": PASART_PL_URL + img_src[:IMAGE_SIZE_LINK_INDEX] + size_chars[i] + img_src[IMAGE_SIZE_LINK_INDEX + 1:]
                        }
                    )
                """
    else:
        log_message(f"Coudn't find any photos: {product_url}")
        return None


    return product_info


def get_all_products_links(max_page_count):
    page_num = 0
    all_products_links = []
    isFinished = False

    while not isFinished and page_num < max_page_count:
        sys.stdout.write(f"\rFetching page num: {page_num}")
        response = requests.get(PASART_SEARCH_URL + "?counter=" + str(page_num))
        soup = BeautifulSoup(response.text, 'html.parser')

        products_section = soup.find('section', id='search')

        if products_section:
            products_tiles = products_section.find_all('div', recursive=False)

            for product_tile in products_tiles:
                all_products_links.append(product_tile.find('a')['href'])
        else:
            isFinished = True
        page_num += 1

    sys.stdout.write(f"\rFetching all products links finished\n")
    return all_products_links


def extract_special_category_product_connections():
    special_categories_product_list = {
        "Nowości": [],
        "Bestsellery": [],
        "Promocje": []
    }  
    
    categories_urls = [PASART_NEWPRODUCTS_URL, PASART_BESTSELLERS_URL, PASART_PROMOTIONS_URL]
    
    category_id = 0
    for category, product_urls in special_categories_product_list.items():
        page_num = 0
        isFinished = False

        while not isFinished:
            sys.stdout.write(f"\rFetching {category} page num: {page_num}")
            response = requests.get(categories_urls[category_id] + "?counter=" + str(page_num))
            soup = BeautifulSoup(response.text, 'html.parser')

            products_section = soup.find('section', id='search')

            if products_section:
                products_tiles = products_section.find_all('div', recursive=False)

                for product_tile in products_tiles:
                    product_urls.append(product_tile.find('a')['href'])
            else:
                isFinished = True   
            page_num += 1
        category_id += 1
        sys.stdout.write(f"\rFetching {category} related products finished\n")

    return special_categories_product_list
       

def extract_and_save_products(max_page_count = 1e6):
    all_products_links = get_all_products_links(max_page_count)
    special_categories_product_list = extract_special_category_product_connections()

    progress_bar(0, len(all_products_links), reset=True)
    with open(PRODUCTS_OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write('[')  # Start the JSON array
        first_entry = True  # Flag to handle commas between entries

        it = 0
        for product_link in all_products_links:
            product_info = extract_product_info(product_link, special_categories_product_list)
            
            progress_bar(it + 1, len(all_products_links))
            it += 1
            if product_info is None:
                continue

            # Write the JSON object for this product
            if not first_entry:
                f.write(',')  # Add a comma before the next entry
            else:
                first_entry = False

            
            json.dump(product_info, f, ensure_ascii=False)
            # json.dump(product_info, f, ensure_ascii=False, indent=4) # Formatted file

        f.write(']')  # End the JSON array
        sys.stdout.write(f"\nFetching all products links finished")
    
    
extract_and_save_products()
# extract_and_save_products(max_page_count=1)
