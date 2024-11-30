from config import *
import requests
from http import HTTPStatus
import xml.etree.ElementTree as ET


# Function to delete a category
def delete_product(product_id):
    url = f"{PRODUCTS_URL}/{product_id}"
    response = requests.delete(url, auth=(API_KEY, ''))
    
    # LOG response status message
    if response.status_code == HTTPStatus.OK:
        log_message(f"Deleted product ID: {product_id}")
    else:
        log_message(f"Failed to delete product ID {product_id}: {response.status_code}, {response.text}")


# Main script to delete products
start_index, end_index = 150, 220
progress_bar(0, end_index - start_index, reset=True)

for current_id in range(start_index, end_index):
    delete_product(current_id)
    progress_bar(current_id - start_index + 1, end_index - start_index)