import logging
import sys
import time

# Pasart urls
PASART_URL = "https://www.pasart.pl"
PASART_PL_URL = PASART_URL + "/pl"
PASART_SEARCH_URL = PASART_PL_URL + "/search"
PASART_CATEGORIES_URL = PASART_PL_URL + "/categories"
PASART_NEWPRODUCTS_URL = PASART_PL_URL + "/newproducts/nowosc"
PASART_BESTSELLERS_URL = PASART_PL_URL + "/bestsellers/bestseller"
PASART_PROMOTIONS_URL = PASART_PL_URL + "/menu/promocje-2311"

# Scraping output files
SCRAPING_OUTPUT_DIRECTORY = './resources/scraping_results/'
PRODUCTS_OUTPUT_FILE = SCRAPING_OUTPUT_DIRECTORY + 'products.json'
CATEGORIES_OUTPUT_FILE = SCRAPING_OUTPUT_DIRECTORY + 'categories.json'

# Pasart html or url structure constants #
IMAGE_SIZE_LINK_INDEX = 6

# Other
LOGGING_ENABLED = True
LOG_FILE = "./scraper/data_scrape_scripts/scraper.log"

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
