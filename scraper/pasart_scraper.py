import json
import requests
from bs4 import BeautifulSoup

PASART_PL_URL = "https://www.pasart.pl/pl"
PASART_SEARCH_URL = PASART_PL_URL + "/search"
PASART_CATEGORIES_URL = PASART_PL_URL + "/categories"
SCRAPING_OUTPUT_DIRECTORY = '../resources/scraping_results'
PRODUCTS_OUTPUT_FILE = SCRAPING_OUTPUT_DIRECTORY + 'products.json'
CATEGORIES_OUTPUT_FILE = SCRAPING_OUTPUT_DIRECTORY + 'categories.json'

# pasart html or url structure constants #
IMAGE_SIZE_LINK_INDEX = 6


def extract_product_info(product_url):
    response = requests.get(product_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    product_info = {}

    product_info_script = soup.find('footer').find_all('script', type='application/ld+json')[3]

    if product_info_script:
        try:
            json_data = json.loads(product_info_script.string)
        except json.JSONDecodeError as e:
            return None


        # Extract important information
        product_info = {
            "name": json_data.get("name", ""),
            "description": json_data.get("description", ""),
            "productID": json_data.get("productID", "").replace("mpn:", ""), # Don't know if it should stay with mpn: or not
            "categories": "",
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
                "availability": offer.get("availability", ""),
                "url": offer.get("url", ""),
                "price": None,
                "sale_price": None,
                "valid_through": None
            }

            # Extract price specifications
            price_specifications = offer.get("priceSpecification", [])
            for spec in price_specifications:
                if spec.get("@type") == "PriceSpecification":
                    offer_details["price"] = spec.get("price", "")
                elif spec.get("@type") == "UnitPriceSpecification":
                    offer_details["sale_price"] = spec.get("price", "")
                    offer_details["valid_through"] = spec.get("validThrough", "")

            product_info["offers"].append(offer_details)
    else:
        print(f"\033Coudn't find product info script: {product_url} \033[0m")

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
        print(f"\033Coudn't find any categories: {product_url}\033[0m")

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
        print(f"\033Coudn't find any product properties: {product_url}\033[0m")


    # Extract photos links
    photos_slider_div = soup.find('div', id='photos_slider')
    if photos_slider_div:

        # Iterate over all figure tags within the div
        for figure in photos_slider_div.find_all('figure'):
            # Find the img tag within the figure
            img_tag = figure.find('img')
            
            if img_tag and 'src' in img_tag.attrs:
                img_src = img_tag['src']
                
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
    else:
        print(f"\033Coudn't find any photos: {product_url}\033[0m")


    return product_info


def get_all_products_links(max_page_count):
    page_num = 1
    all_products_links = []
    isFinished = False

    while not isFinished and page_num <= max_page_count:
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

    return all_products_links



def extract_and_save_products(max_page_count = 1e6):
    all_products_links = get_all_products_links(max_page_count)

    with open(PRODUCTS_OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write('[')  # Start the JSON array
        first_entry = True  # Flag to handle commas between entries

        for product_link in all_products_links:
            print(product_link)
            product_info = extract_product_info(product_link)
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


####### SCRAP CATEGORIES ######## 

def extract_categories_tree(ul_tag):

    categories_tree = []
    for li in ul_tag.find_all("li", recursive=False):
        # Extract category name from the <a> tag
        a_tag = li.find("a")
        category_name = a_tag.text.strip()
        category = ""
        
        # Check for nested categories
        nested_categories = li.find("ul")
        if nested_categories:
            category = {"name": category_name, "subcategories": extract_categories_tree(nested_categories)}
        else:
            category = category_name
        
        categories_tree.append(category)
    return categories_tree

def extract_and_save_categories():
    response = requests.get(PASART_CATEGORIES_URL)
    soup = BeautifulSoup(response.text, 'html.parser')

    categories_tree = extract_categories_tree(soup.find(id="content").find("ul"))


    with open(CATEGORIES_OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(categories_tree, f, ensure_ascii=False)
        # json.dump(categories_tree, f, ensure_ascii=False, indent=4) # Formatted file


extract_and_save_products()
extract_and_save_categories()
