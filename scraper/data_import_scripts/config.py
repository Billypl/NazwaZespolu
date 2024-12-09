import logging
import sys
import time
import os
from dotenv import load_dotenv

load_dotenv()

# PrestaShop API Configuration
API_KEY = os.getenv("API_KEY")
API_URL = os.getenv("API_URL")

# Prestashop urls
CATEGORIES_URL = API_URL + '/categories'
PRODUCTS_URL = API_URL + '/products'
IMAGES_URL = API_URL + '/images'
PRODUCTS_IMAGES_URL = IMAGES_URL + '/products'
STOCK_AVAILABLES_URL = API_URL + '/stock_availables'

# Scraping results file location
SCRAPING_RESULST_DIRECTORY = "../../resources/scraping_results"
SCRAPING_CATEGORIES_FILE = SCRAPING_RESULST_DIRECTORY + "/categories.json"
SCRAPING_PRODUCTS_FILE = SCRAPING_RESULST_DIRECTORY + "/products.json"

# Other
POST_HEADERS = {'Content-Type': 'application/xml; charset=UTF-8'}

CATEGORIES_IDS_OUTPUT_FILE = "categories_ids.json"
LOG_FILE = 'app.log'
LOGGING_ENABLED = True


def progress_bar(iteration, total, length=30, reset=False):
    if reset:
        global start_time
        start_time = time.time()
        return
    
    # Calculate progress
    progress = int(length * iteration / total)
    bar = "█" * progress + "-" * (length - progress)
    percent = (iteration / total) * 100
    
    # Calculate elapsed time and estimate remaining time
    elapsed_time = time.time() - start_time
    estimated_time = (elapsed_time / iteration) * (total - iteration)
    
    elapsed_minutes, elapsed_seconds = divmod(elapsed_time, 60)
    estimated_minutes, estimated_seconds = divmod(estimated_time, 60)

    sys.stdout.write(f"\r|{bar}| {percent:.2f}% ({iteration}/{total}) "
                      f"Elapsed: {int(elapsed_minutes):02}:{int(elapsed_seconds):02} "
                      f"Estimated: {int(estimated_minutes):02}:{int(estimated_seconds):02}")
    sys.stdout.flush()
    
    
logging.basicConfig(filename=LOG_FILE, level=logging.INFO, format='%(asctime)s - %(message)s', filemode='w')    

def log_message(message):
    if LOGGING_ENABLED:
        logging.info(message)
