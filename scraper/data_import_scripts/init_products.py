from config import *
import requests
from http import HTTPStatus
from requests.auth import HTTPBasicAuth
from io import BytesIO
import xml.etree.ElementTree as ET
import json
from concurrent.futures import ThreadPoolExecutor


PRODUCT_QUANTITY = 5
PRODUCT_WEIGHT = 0.1
PRODUCTS_NUMBER_TO_INITIALZIE = int(sys.argv[1]) # -1

def download_image(image_url):
    response = requests.get(image_url)
    if response.status_code == HTTPStatus.OK:
        log_message(f"Image downloaded successfully {image_url}")
        return BytesIO(response.content)
    else:
        log_message(f"Failed to download image {image_url}")
        return None


def upload_product_image(product_id, product_name, product_image_url):
    product_image_data = download_image(product_image_url)
    upload_url = f"{PRODUCTS_IMAGES_URL}/{product_id}"

    response = requests.post(
        upload_url,
        files={'image': (f"{product_id}.jpg", product_image_data, 'image/jpeg')},
        auth=HTTPBasicAuth(API_KEY, '')
    )

    if response.status_code == HTTPStatus.OK or response.status_code == HTTPStatus.CREATED:
        log_message(f"Image uploaded for product {product_name} successfully!")
    else:
        log_message(f"Failed to upload image for product {product_name}: {response.status_code}")


def get_stock_id(product_id):
    
    response = requests.get(
        f"{STOCK_AVAILABLES_URL}?filter[id_product]={product_id}",
        auth=(API_KEY, '')
    )
    if response.status_code == 200:
        root = ET.fromstring(response.content)
        stock_ids = [node.attrib['id'] for node in root.findall(".//stock_available")]
        return stock_ids[0] if stock_ids else None
    else:
        raise Exception(f"Error fetching stock ID: {response.content}")


def update_stock(stock_id, quantity):

    response = requests.get(f"{STOCK_AVAILABLES_URL}/{stock_id}", auth=(API_KEY, ''))
    if response.status_code == HTTPStatus.OK:
        # Fetch product stock data and modify its quantity
        stock_data = ET.fromstring(response.content)
        for node in stock_data.findall(".//quantity"):
            node.text = str(quantity)
        
        update_response = requests.put(
            f"{STOCK_AVAILABLES_URL}/{stock_id}",
            auth=(API_KEY, ''),
            data=ET.tostring(stock_data),
            headers=POST_HEADERS
        )
        
        if update_response.status_code in [200, 204]:
            log_message(f"Stock updated successfully for stock ID {stock_id}")
        else:
            raise Exception(f"Error updating stock: {update_response.content}")
    else:
        raise Exception(f"Error fetching stock data: {response.content}")


def create_product(product_json, categories_ids):
    
    product_name = product_json['name']
    product_price = product_json['offers'][0]['price']
    reference = product_json['properties'][0]['value']
    description = product_json['description']
    properties = ''

    
    for prop in product_json['properties']:
        properties += f'<br>{prop["type"]}: {prop["value"]} <br>'
    properties.strip()
    
    full_description = f'{description}<br>{properties}'
        
    product_netto_price = round(float(product_price) / 1.23, 6)

    product_xml = f"""<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
        <product>
            <id_category_default>2</id_category_default>
            <id_tax_rules_group>1</id_tax_rules_group>
            <price><![CDATA[{product_netto_price}]]></price>
            <new>0</new>
            <id_shop_default>1</id_shop_default>
            <weight><![CDATA[{PRODUCT_WEIGHT}]]></weight>
            <reference><![CDATA[{reference}]]></reference>
            <available_for_order>1</available_for_order>
            <active>1</active>
            <show_price>1</show_price>            
            <state>1</state>
            <name>
                <language id="1"><![CDATA[{product_name}]]></language>
            </name>
            <description>
                <language id="1"><![CDATA[{full_description}]]></language>
            </description>
            <associations>
                <categories>
                    <category>
                        <id>2</id>
                    </category>
    """
    
    """
            <description>
                <language id="1"><![CDATA[{properties}]]></language>
            </description>
    """
    # Iterate over categories and append them to the product_xml string
    for level, category_name in product_json['categories'].items():
        if level == "level4": # Prestashop categories page doesn't list deeper than level 3 categories
            break
        product_xml += f"""
            <category>
                <id><![CDATA[{categories_ids[category_name]}]]></id>
            </category>"""

    # Iterate over special categories and append them to the product_xml string
    for special_category_name in product_json['special_categories']:
        product_xml += f"""
            <category>
                <id><![CDATA[{categories_ids[special_category_name]}]]></id>
            </category>"""
                        
    # Closing the XML structure
    product_xml += """
                </categories>
            </associations>
        </product>
    </prestashop>"""
        
    response = requests.post(PRODUCTS_URL, auth=(API_KEY, ''), headers=POST_HEADERS, data=product_xml.encode('utf-8'))
    global log_file
    
    if response.status_code == HTTPStatus.CREATED:
        log_message(f"Product {product_name} created successfully!")
    else:
        log_message(f"Failed to create product {product_name}: {response.status_code}")
        log_message(response.text)
        return
        
        
    tree = ET.ElementTree(ET.fromstring(response.text))
    root = tree.getroot()
    product_id_element = root.find(".//id")
    product_id = product_id_element.text.strip()

    with ThreadPoolExecutor() as executor:
        executor.submit(update_stock(get_stock_id(product_id), PRODUCT_QUANTITY))
        for image_link in product_json['images']:
            executor.submit(upload_product_image(product_id, product_name, image_link))


def create_products(products_data, categories_ids, max_products_count=-1):
    if max_products_count == -1:
        max_products_count = len(products_data)
    product_counter = max_products_count
    
    progress_bar(0, max_products_count, reset=True)
    for product in products_data:
        progress_bar(max_products_count - product_counter + 1, max_products_count)
        create_product(product, categories_ids)
        product_counter -= 1
        if product_counter == 0:
            break
    
def load_to_memory_json_data():
    with open(SCRAPING_PRODUCTS_FILE, 'r', encoding='utf-8') as file:
        products_data = json.load(file)
        
    with open(CATEGORIES_IDS_OUTPUT_FILE, 'r', encoding='utf-8') as file_cat:
        categories_ids = json.load(file_cat)
        
    return products_data, categories_ids


products_data, categories_ids = load_to_memory_json_data()
create_products(products_data, categories_ids, max_products_count=PRODUCTS_NUMBER_TO_INITIALZIE)