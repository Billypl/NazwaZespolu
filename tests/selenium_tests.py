from config import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import random
import time
import os
import glob
import shutil
import argparse


# Add 10 products (with random quantity) from 2 categories to cart
def products_to_cart_test(total_cart_quantity):
    total_cart_quantity[0] = add_category_products_to_cart(FIRST_CATEGORY_ID)
    total_cart_quantity[0] += add_category_products_to_cart(SECOND_CATEGORY_ID)

    check_cart_count_number(total_cart_quantity)
    print("TEST - Adding 10 products from 2 categories to cart (1) - has completed successfully!")

def add_category_products_to_cart(category_id):
    cart_quantity = 0
    i = 0
    index = 1
    back_to_category_url = ""
    page_index = 1
    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, category_id))
    )
    first_category_link = driver.find_element(By.ID, category_id)
    first_category_link.click()

    while i < 5:
        WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
            EC.element_to_be_clickable((By.CLASS_NAME, PRODUCT_LINK_CLASSNAME))
        )
        product_link = driver.find_element(By.XPATH, f"(//a[@class='{PRODUCT_LINK_CLASSNAME_XPATH}'])[{index}]")
        back_to_category_url = driver.current_url
        product_link.click()

        WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.CLASS_NAME, ADD_TO_CART_BUTTON_CLASSNAME))
        )
        plus_one_button = driver.find_element(By.CLASS_NAME, PLUS_ONE_BUTTON_CLASSNAME)
        quantity_of_product = random.randint(1,MAX_PRODUCT_QUANTITY_TO_ADD)
        for _ in range(quantity_of_product - 1):
            plus_one_button.click()

        # Check if given quantity of product is available
        WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.ID, PRODUCT_AVAIBLE_ID))
        )
        product_avaible = driver.find_element(By.ID, PRODUCT_AVAIBLE_ID)
        if "Obecnie brak na stanie" in product_avaible.text or "Nie ma wystarczającej ilości produktów w magazynie" in product_avaible.text:
            index += 1
            if index > 12:
                index = 1
                page_index += 1
                if "page" in back_to_category_url:
                    back_to_category_url = back_to_category_url.replace(f"page={page_index-1}", f"page={page_index}")
                else:
                    back_to_category_url = back_to_category_url + "?page=2"

            driver.get(back_to_category_url)
            continue

        add_to_cart_button = driver.find_element(By.CLASS_NAME, ADD_TO_CART_BUTTON_CLASSNAME)
        add_to_cart_button.click()
        cart_quantity += quantity_of_product
        index += 1
        i += 1
        if index > 12:
                index = 1
                page_index += 1
                if "page" in back_to_category_url:
                    back_to_category_url = back_to_category_url.replace(f"page={page_index-1}", f"page={page_index}")
                else:
                    back_to_category_url = back_to_category_url + "?page=2"

        close_cart_pop_up()
        driver.get(back_to_category_url)

    return cart_quantity

# Search for product and add one random result to cart
def search_and_add_product_to_cart_test(search_text, total_cart_quantity):
    i = 0
    is_product_added = False
    while not is_product_added and i < MAX_ITERATIONS_TO_FIND_RANDOM_PRODUCT:
        WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.CLASS_NAME, SEARCH_INPUT_CLASSNAME))
        )
        search_input = driver.find_element(By.CLASS_NAME, SEARCH_INPUT_CLASSNAME)
        search_input.send_keys(search_text + Keys.ENTER)

        WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
                EC.element_to_be_clickable((By.CLASS_NAME, PRODUCT_LINK_CLASSNAME))
        )
        product_links = driver.find_elements(By.CLASS_NAME, PRODUCT_LINK_CLASSNAME)
        random_product = random.randint(0, len(product_links) - 1)
        product_links[random_product].click()

        # Check if product is available
        WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.ID, PRODUCT_AVAIBLE_ID))
        )
        product_avaible = driver.find_element(By.ID, PRODUCT_AVAIBLE_ID)
        if not "Obecnie brak na stanie" in product_avaible.text:
            is_product_added = True
        
        i += 1

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
            EC.element_to_be_clickable((By.CLASS_NAME, ADD_TO_CART_BUTTON_CLASSNAME))
    )
    add_to_cart_button = driver.find_element(By.CLASS_NAME, ADD_TO_CART_BUTTON_CLASSNAME)
    add_to_cart_button.click()
    total_cart_quantity[0] += 1

    close_cart_pop_up()

    check_cart_count_number(total_cart_quantity)
    print("TEST - Searching and adding random product to cart (2) - has completed successfully!")

def close_cart_pop_up():
    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.XPATH, f"//div[@id='{CART_POP_UP_CLOSE_ID}']//button[@data-dismiss='modal']"))
    )
    close_button = driver.find_element(By.XPATH, f"//div[@id='{CART_POP_UP_CLOSE_ID}']//button[@data-dismiss='modal']")
    close_button.click()

def check_cart_count_number(total_cart_quantity):
    go_to_cart()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, CART_PRODUCT_QUANTITY_COUNT_CLASSNAME))
    )
    cart_product_counts = driver.find_elements(By.CLASS_NAME, CART_PRODUCT_QUANTITY_COUNT_CLASSNAME)

    cart_count_number = 0
    for product_count in cart_product_counts:
        product_count_value = product_count.get_property("value")
        cart_count_number += int(product_count_value)
    assert total_cart_quantity[0] == cart_count_number, f"Expected {total_cart_quantity[0]} products, but got {cart_count_number}"

# Delete 3 products from cart
def delete_products_from_cart_test(total_cart_quantity):
    go_to_cart()

    for i in range(1,4):
        WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
            EC.element_to_be_clickable((By.CLASS_NAME, DELETE_PRODUCT_LINK_CLASSNAME))
        )
        product_quantity = driver.find_element(By.XPATH, f"(//input[@class='{PRODUCT_QUANTITY_CLASSNAME_XPATH}'])[{i}]")
        delete_product_link = driver.find_element(By.XPATH, f"(//a[@class='{DELETE_PRODUCT_LINK_CLASSNAME_XPATH}'])[{i}]")
        delete_product_link.click()
        total_cart_quantity[0] -= int(product_quantity.get_attribute("value"))

    driver.refresh()
    check_cart_count_number(total_cart_quantity)
    print("TEST - Deleting 3 products from cart (3) - has completed successfully!")

# Register new user
def register_test():
    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.CLASS_NAME, LOGIN_LINK_CLASSNAME))
    )
    login_link = driver.find_element(By.CLASS_NAME, LOGIN_LINK_CLASSNAME)
    login_link.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.CLASS_NAME, REGISTER_LINK_CLASSNAME))
    )
    register_link = driver.find_element(By.CLASS_NAME, REGISTER_LINK_CLASSNAME)
    register_link.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, REGISTER_GENDER_ID))
    )
    gender_radio_button = driver.find_element(By.ID, REGISTER_GENDER_ID)
    gender_radio_button.click()
    name_input = driver.find_element(By.ID, REGISTER_NAME_INPUT_ID)
    name_input.send_keys("Jan")
    surname_input = driver.find_element(By.ID, REGISTER_SURNAME_INPUT_ID)
    surname_input.send_keys("Rogowski")
    email_input = driver.find_element(By.ID, REGISTER_EMAIL_INPUT_ID)
    email_input.send_keys(f"{int(time.time())}@student.pg.edu.pl")
    password_input = driver.find_element(By.ID, REGISTER_PASSWORD_INPUT_ID)
    password_input.send_keys("kocham-prestashopa")
    birthdate_input = driver.find_element(By.ID, REGISTER_BIRTHDATE_INPUT_ID)
    birthdate_input.send_keys("1970-05-31")
    checkbox1 = driver.find_element(By.NAME, REGISTER_CHECKBOX1_NAME)
    checkbox1.click()
    checkbox2 = driver.find_element(By.NAME, REGISTER_CHECKBOX2_NAME)
    checkbox2.click()
    checkbox3 = driver.find_element(By.NAME, REGISTER_CHECKBOX3_NAME)
    checkbox3.click()
    checkbox4 = driver.find_element(By.NAME, REGISTER_CHECKBOX4_NAME)
    checkbox4.click()
    submit_button = driver.find_element(By.CLASS_NAME, REGISTER_SUBMIT_BUTTON_CLASSNAME)
    submit_button.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, LOGOUT_LINK_CLASSNAME))
    )

    print("TEST - Registering new account (4) - has completed successfully!")

def go_to_cart():
    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.CLASS_NAME, CART_LINK_CLASSNAME))
    )
    cart_link = driver.find_element(By.CLASS_NAME, CART_LINK_CLASSNAME)
    cart_link.click()

# Go to cart and make an order for products in cart
def make_order_test():
    go_to_cart()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.CLASS_NAME, GO_TO_CHECKOUT_LINK_CLASSNAME))
    )
    checkout_link = driver.find_element(By.CLASS_NAME, GO_TO_CHECKOUT_LINK_CLASSNAME)
    checkout_link.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, CHECKOUT_ADDRESS_ALIAS_INPUT_ID))
    )
    alias_input = driver.find_element(By.ID, CHECKOUT_ADDRESS_ALIAS_INPUT_ID)
    alias_input.send_keys("Jasiek2r")
    company_input = driver.find_element(By.ID, CHECKOUT_ADDRESS_COMPANY_INPUT_ID)
    company_input.send_keys("Politechnika Gdańska")
    nip_input = driver.find_element(By.ID, CHECKOUT_ADDRESS_NIP_INPUT_ID)
    nip_input.send_keys("1111111111")
    address_input = driver.find_element(By.ID, CHECKOUT_ADDRESS_ADDRESS_INPUT_ID)
    address_input.send_keys("Gabriela Narutowicza 11/12")
    address_add_info_input = driver.find_element(By.ID, CHECKOUT_ADDRESS_ADDRESS_ADD_INFO_INPUT_ID)
    address_add_info_input.send_keys("Nowe Eti")
    postcode_input = driver.find_element(By.ID, CHECKOUT_ADDRESS_POSTCODE_INPUT_ID)
    postcode_input.send_keys("80-222")
    city_input = driver.find_element(By.ID, CHECKOUT_ADDRESS_CITY_INPUT_ID)
    city_input.send_keys("Gdańsk")
    phone_input = driver.find_element(By.ID, CHECKOUT_ADDRESS_PHONE_INPUT_ID)
    phone_input.send_keys("123456789")
    continue_button = driver.find_element(By.NAME, CHECKOUT_ADDRESS_CONTINUE_BUTTON_NAME)
    continue_button.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, CHECKOUT_STEP_COMPLETED_CLASSNAME))
    )
    complete_steps = driver.find_elements(By.CLASS_NAME, CHECKOUT_STEP_COMPLETED_CLASSNAME)
    assert len(complete_steps) == 2, f"Expected 2 completed steps, but got {len(complete_steps)}" 

    print("TEST - Making an order (5) - has completed successfully!")

# Choose one of two possible shipping carriers
def choose_delivery_test():
    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, CHECKOUT_DELIVERY_CARRIER_ID))
    )
    delivery_carrier_radio_button = driver.find_element(By.ID, CHECKOUT_DELIVERY_CARRIER_ID)
    delivery_carrier_radio_button.click()
    delivery_info_input = driver.find_element(By.ID, CHECKOUT_DELIVERY_INFO_ID)
    delivery_info_input.send_keys("leleleel")
    continue_button = driver.find_element(By.NAME, CHECKOUT_DELIVERY_CONTINUE_BUTTON_NAME)
    continue_button.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, CHECKOUT_STEP_COMPLETED_CLASSNAME))
    )
    complete_steps = driver.find_elements(By.CLASS_NAME, CHECKOUT_STEP_COMPLETED_CLASSNAME)
    assert len(complete_steps) == 3, f"Expected 3 completed steps, but got {len(complete_steps)}"

    print("TEST - Choosing shipping carrier (7) - has completed successfully!")

# Choose payment on delivery method and submit the order
def choose_payment_method_and_submit_test():
    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, CHECKOUT_PAYMENT_METHOD_ID))
    )
    payment_method_radio_button = driver.find_element(By.ID, CHECKOUT_PAYMENT_METHOD_ID)
    payment_method_radio_button.click()
    accept_terms_checkbox = driver.find_element(By.ID, CHECKOUT_PAYMENT_ACCEPT_TERMS_CHECKBOX_ID)
    accept_terms_checkbox.click()
    submit_button = driver.find_element(By.CLASS_NAME, CHECKOUT_PAYMENT_SUBMIT_BUTTON_CLASSNAME)
    submit_button.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, ORDER_REFERENCE_VALUE_ID))
    )

    print("TEST - Choosing payment on delivery method and submitting and order (6,8) - has completed successfully!")

# Go to orders page and check order status
def check_order_status_test():
    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.CLASS_NAME, ACCOUNT_LINK_CLASSNAME))
    )
    account_link = driver.find_element(By.CLASS_NAME, ACCOUNT_LINK_CLASSNAME)
    account_link.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.ID, ORDER_DETAILS_LINK_ID))
    )
    order_details_link = driver.find_element(By.ID, ORDER_DETAILS_LINK_ID)
    order_details_link.click()

    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, ORDER_STATUS_CLASSNAME))
    )
    order_statuses = driver.find_elements(By.CLASS_NAME, ORDER_STATUS_CLASSNAME)
    order_status = order_statuses[0].text

    assert "Oczekiwanie na płatność przy odbiorze" in order_status, f"Wrong order status: {order_status}" 

    print("TEST - Checking order status (9) - has completed successfully!")

# Download an invoice, then find and delete it from disk
def download_invoice_test():
    WebDriverWait(driver, PAGE_TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.CLASS_NAME, DOWNLOAD_INVOICE_LINK_CLASSNAME))
    )
    invoice_link = driver.find_element(By.CLASS_NAME, DOWNLOAD_INVOICE_LINK_CLASSNAME)
    invoice_link.click()

    downloads_path = get_download_path()

    # Wait for file to download
    end_time = time.time() + INVOICE_DOWNLOAD_TIMEOUT_SEC
    while time.time() < end_time:
        files = [f for f in os.listdir(downloads_path) if f.startswith("FV") and f.endswith(".pdf")]
        if files:
            break
        time.sleep(1)

    invoice_files = glob.glob(os.path.join(downloads_path, 'FV*.pdf'))
    assert len(invoice_files) > 0, "No invoice file found."

    if AUTO_DELETE_INVOICE:
        shutil.rmtree(downloads_path)
        if os.path.exists(downloads_path):
            os.rmdir(downloads_path)

    print("TEST - Downloading an invoice (10) - has completed successfully!")

def get_download_path():
    return os.path.join(os.getcwd(), DOWNLOAD_FOLDER_PATH)


# Handle script flags
parser = argparse.ArgumentParser(description="Run Selenium tests.")
parser.add_argument(
    "-p", 
    "--param", 
    action="store_true", 
    help="Optional flag for Selenium tests"
)
args = parser.parse_args()

# Create download folder
downloads_path = get_download_path()
if not os.path.exists(downloads_path):
    os.makedirs(downloads_path)

# Create Google Chrome webdriver to perform test actions
chrome_options = Options()
prefs = {
    "download.default_directory": downloads_path
}
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
#chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--window-size=1920,1080")
chrome_options.add_argument("--allow-insecure-localhost")
chrome_options.add_experimental_option("prefs", prefs)
chrome_options.binary_location = BINARY_PATH
service = Service(executable_path=WEBDRIVER_PATH)
driver = webdriver.Chrome(service=service, options=chrome_options)
if args.param:
    driver.get(PROD_WEBSITE_URL)
else:
    driver.get(DEV_WEBSITE_URL)

# Theoretical number of products which should be in the cart
total_cart_quantity = [0]
# Tests
print("RUN - Adding 10 products from 2 categories to cart (1)")
products_to_cart_test(total_cart_quantity)
print("RUN - Searching and adding random product to cart (2)")
search_and_add_product_to_cart_test(PRODUCT_SEARCH_NAME, total_cart_quantity)
print("RUN - Deleting 3 products from cart (3)")
delete_products_from_cart_test(total_cart_quantity)
print("RUN - Registering new account (4)")
register_test()
print("RUN - Making an order (5)")
make_order_test()
print("RUN - Choosing shipping carrier (7)")
choose_delivery_test()
print("RUN - Choosing payment on delivery method and submitting and order (6,8)")
choose_payment_method_and_submit_test()
print("RUN - Checking order status (9)")
check_order_status_test()
print("RUN - Downloading an invoice (10)")
download_invoice_test()
#time.sleep(7)

print("All tests have completed successfully!")
driver.quit()