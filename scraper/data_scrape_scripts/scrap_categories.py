from config import *
import json
import sys
import requests
from bs4 import BeautifulSoup


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
        
        
extract_and_save_categories()
