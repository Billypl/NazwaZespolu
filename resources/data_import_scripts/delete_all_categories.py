from config import *
import requests
import xml.etree.ElementTree as ET

# Function to delete a category
def delete_category(category_id):
    url = f"{CATEGORIES_URL}/{category_id}"
    response = requests.delete(url, auth=(API_KEY, ''))
    if response.status_code == 200:
        print(f"Deleted category ID: {category_id}")
    else:
        print(f"Failed to delete category ID {category_id}: {response.status_code}, {response.text}")

# Main script to delete categories starting from ID 2
start_id = 400
end_id = 786
current_id = start_id

for current_id in range (start_id, end_id):
    delete_category(current_id)