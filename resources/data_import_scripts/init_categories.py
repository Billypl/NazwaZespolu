from config import *
import requests
import json
import xml.etree.ElementTree as ET

categories_ids = {}

# Function to fetch all categories
def fetch_categories():
    print("Fetching categories...")
    response = requests.get(CATEGORIES_URL, auth=(API_KEY, ''))

    if response.status_code == 200:
        print("Categories fetched successfully!")
        print(response.text)  # Print XML response
    else:
        print(f"Failed to fetch categories: {response.status_code}")

# Function to create a new category
def create_category2(name, id_parent=2):
    print(f"Creating category: {name} (Parent ID: {id_parent})...")
    category_xml = f"""
    <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
        <category>
            <id_parent><![CDATA[{id_parent}]]></id_parent>
            <active><![CDATA[1]]></active>
            <name>
                <language id="1"><![CDATA[{name}]]></language>
            </name>
            <link_rewrite>
                <language id="1"><![CDATA[{name.lower().replace(' ', '-')}]]></language>
            </link_rewrite>
        </category>
    </prestashop>
    """

    response = requests.post(CATEGORIES_URL, auth=(API_KEY, ''), headers=POST_HEADERS, data=category_xml)

    if response.status_code == 201:
        print("Category created successfully!")
        print(response.text)  # Print response for the new category
    else:
        print(f"Failed to create category: {response.status_code}")
        print(response.text)


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
        
    response = requests.post(CATEGORIES_URL, auth=(API_KEY, ''), headers=POST_HEADERS, data=category_xml)
    
    if response.status_code == 201:
        tree = ET.ElementTree(ET.fromstring(response.text))
        root = tree.getroot()

        category_id_element = root.find(".//id")
        if category_id_element is not None:
                category_id = category_id_element.text.strip()
                global category_ids
                categories_ids[category_name] = category_id
                

        return int(category_id)
    else:
        print(f"Failed to create category: {response.status_code}")
        print(response.text)
        print(category_name)
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
                
            
with open(SCRAPING_CATEGORIES_FILE, 'r', encoding='utf-8') as file:
    categories_data = json.load(file)
    
create_categories(categories_data)

with open(CATEGORIES_IDS_OUTPUT_FILE, 'w', encoding='utf-8') as file:
    json.dump(categories_ids, file, ensure_ascii=False, indent=4)