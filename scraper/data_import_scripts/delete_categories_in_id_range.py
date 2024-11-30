from config import *
import logging
import requests
from http import HTTPStatus
import xml.etree.ElementTree as ET

# Function to delete a category
def delete_category(category_id):
    url = f"{CATEGORIES_URL}/{category_id}"
    response = requests.delete(url, auth=(API_KEY, ''))
    
    # LOG response status message
    if response.status_code == HTTPStatus.OK:
        log_message(f"Deleted category ID: {category_id}")
    else:
        log_message(f"Failed to delete category ID {category_id}: {response.status_code}, {response.text}")


# Main script to delete categories 
# IMPORTANT NOTE indexes under 3 are special and are better left not to be deleted
start_index, end_index = int(sys.argv[1]), int(sys.argv[2]) + 1 
start_index = start_index if start_index >= 3 else 3
progress_bar(0, end_index - start_index, reset=True)

for current_id in range(start_index, end_index):
    delete_category(current_id)
    progress_bar(current_id - start_index + 1, end_index - start_index)
    