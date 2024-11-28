# PrestaShop API Configuration
API_KEY = "AHUST17VZN26G1DYME6K6INALDE4L628"
API_URL = "http://localhost:8080/api"

# Prestashop urls
CATEGORIES_URL = API_URL + '/categories'
PRODUCTS_URL = API_URL + '/products'
PRODUCTS_IMAGES_URL = API_URL + '/images/products'

# Scraping results file location
SCRAPING_RESULST_DIRECTORY = "./resources/scraping_results"
SCRAPING_CATEGORIES_FILE = SCRAPING_RESULST_DIRECTORY + "/categories.json"
SCRAPING_PRODUCTS_FILE = SCRAPING_RESULST_DIRECTORY + "/products.json"

# Other
POST_HEADERS = {"Content-Type": "application/xml"}
CATEGORIES_IDS_OUTPUT_FILE = "./resources/data_import_scripts/categories_ids.json"