from config import *
import requests
from http import HTTPStatus
import json
import xml.etree.ElementTree as ET


def create_category(category_name, parent_id):
    category_xml = f"""
    <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
        <category>
            <id_parent><![CDATA[{parent_id}]]></id_parent>
            <active><![CDATA[1]]></active>
            <name>
                <language id="1"><![CDATA[{category_name}]]></language>
            </name>
            <link_rewrite>
                <language id="1"><![CDATA[{category_name.lower().replace(' ', '-')}]]></language>
            </link_rewrite>
        </category>
    </prestashop>
    """
        
    response = requests.post(CATEGORIES_URL, auth=(API_KEY, ''), headers=POST_HEADERS, data=category_xml.encode('utf-8'))
    
    if response.status_code == HTTPStatus.CREATED:
        tree = ET.ElementTree(ET.fromstring(response.text))
        root = tree.getroot()
        category_id_element = root.find(".//id")
        
        category_id = category_id_element.text.strip()
        global category_ids
        categories_ids[category_name] = category_id
        
        log_message(f"Category {category_name} created successfully!")
        return int(category_id)
    else:
        log_message(f"Failed to create category {category_name}: {response.status_code}")
        return None


def create_categories(categories, parent_id=2):
    for category in categories:
        if isinstance(category, str):
            create_category(category, parent_id)
        elif isinstance(category, dict):
            name = category['name']
            subcategories = category.get('subcategories', [])
            category_response = create_category(name, parent_id)
            if category_response:
                create_categories(subcategories, category_response)
                
            
# Load category scraping data to memory
with open(SCRAPING_CATEGORIES_FILE, 'r', encoding='utf-8') as file:
    categories_data = json.load(file)
    
categories_ids = {}
create_categories(categories_data)

# Create category ids map file
with open(CATEGORIES_IDS_OUTPUT_FILE, 'w', encoding='utf-8') as file:
    json.dump(categories_ids, file, ensure_ascii=False, indent=4)