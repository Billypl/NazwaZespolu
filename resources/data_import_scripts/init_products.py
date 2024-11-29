from config import *
import requests
from requests.auth import HTTPBasicAuth
import json
import xml.etree.ElementTree as ET
from io import BytesIO


PRODUCT_QUANTITY = 5

def download_image(image_url):
    response = requests.get(image_url)
    if response.status_code == 200:
        print("Image downloaded successfully.")
        return BytesIO(response.content)
    else:
        print("Failed to download image.")
        return None

def upload_product_image(product_id, product_name, product_image_url):
    product_image_data = download_image(product_image_url)
    
    files = {
        'image': ("image.jpg", product_image_data, 'image/jpeg')
    }

    headers = {
        'Content-Type': 'multipart/form-data',
    }

    upload_url = f"{PRODUCTS_IMAGES_URL}/{product_id}"
    request = requests.Request(method="POST", url=upload_url, auth=(API_KEY, ''), headers=headers, files=files)
    print(request)
    response = requests.post(upload_url, auth=(API_KEY, ''), headers=headers, files=files)

    if response.status_code == 201:
        print("Product image uploaded successfully!")
    else:
        print(f"Failed to upload product image: {response.status_code}")
        print(response.text)


def get_stock_id(product_id):
    
    response = requests.get(
        f"{API_URL}/stock_availables?filter[id_product]={product_id}",
        auth=(API_KEY, '')
    )
    if response.status_code == 200:
        root = ET.fromstring(response.content)
        stock_ids = [node.attrib['id'] for node in root.findall(".//stock_available")]
        return stock_ids[0] if stock_ids else None
    else:
        raise Exception(f"Error fetching stock ID: {response.content}")


def update_stock(stock_id, quantity):

    response = requests.get(f"{API_URL}/stock_availables/{stock_id}", auth=(API_KEY, ''))
    if response.status_code == 200:
        stock_data = ET.fromstring(response.content)
        for node in stock_data.findall(".//quantity"):
            node.text = str(quantity)
        
        headers = {'Content-Type': 'application/xml'}
        update_response = requests.put(
            f"{API_URL}/stock_availables/{stock_id}",
            auth=(API_KEY, ''),
            data=ET.tostring(stock_data),
            headers=headers
        )
        if update_response.status_code in [200, 204]:
            print(f"Stock updated successfully for stock ID {stock_id}")
        else:
            raise Exception(f"Error updating stock: {update_response.content}")
    else:
        raise Exception(f"Error fetching stock data: {response.content}")


def create_product(product_json, categories_ids):
    
    product_name = product_json['name']
    product_price = product_json['offers'][0]['price']
    
    product_netto_price = round(float(product_price) / 1.23, 6)
    
    product_xml = f"""<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
        <product>
            <id_category_default>2</id_category_default>
            <id_tax_rules_group>1</id_tax_rules_group>
            <price><![CDATA[{product_netto_price}]]></price>
            <active>1</active>
            <name>
                <language id="1"><![CDATA[{product_name}]]></language>
            </name>
            <associations>
                <categories>
    """
    # Iterate over categories and append them to the product_xml string
    for level, category_name in product_json['categories'].items():
        if level == "level4":
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
        
    response = requests.post(PRODUCTS_URL, auth=(API_KEY, ''), headers=POST_HEADERS, data=product_xml)
    
    if response.status_code == 201:
        print("Product created successfully!")
    else:
        print(f"Failed to create product: {response.status_code}")
        print(response.text)
        return
        
        
    tree = ET.ElementTree(ET.fromstring(response.text))
    root = tree.getroot()
    product_id_element = root.find(".//id")
    product_id = product_id_element.text.strip()

    update_stock(get_stock_id(product_id), PRODUCT_QUANTITY)
    # upload_product_image(product_id, product_name, product_json['images'][0])

    
    
with open(SCRAPING_PRODUCTS_FILE, 'r', encoding='utf-8') as file:
    products_data = json.load(file)
    
with open(CATEGORIES_IDS_OUTPUT_FILE, 'r', encoding='utf-8') as file_cat:
    categories_ids = json.load(file_cat)
    
for product in products_data:
    create_product(product, categories_ids)
