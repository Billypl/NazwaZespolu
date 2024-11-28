from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import random
import time


# Timout time for elements/pages to load
TIMEOUT_TIME_SEC = 3

# Class names
CART_COUNT_CLASSNAME = "cart-products-count"
PRODUCT_LINK_CLASSNAME = "thumbnail.product-thumbnail"
PRODUCT_LINK_CLASSNAME_XPATH = "thumbnail product-thumbnail"
ADD_TO_CART_BUTTON_CLASSNAME = "btn.btn-primary.add-to-cart"
PLUS_ONE_BUTTON_CLASSNAME = "btn.btn-touchspin.js-touchspin.bootstrap-touchspin-up"
SEARCH_INPUT_CLASSNAME = "ui-autocomplete-input"
CART_LINK_CLASSNAME = "blockcart.cart-preview.active"
PRODUCT_QUANTITY_CLASSNAME = "js-cart-line-product-quantity.form-control"
PRODUCT_QUANTITY_CLASSNAME_XPATH = "js-cart-line-product-quantity form-control"
DELETE_PRODUCT_LINK_CLASSNAME_XPATH = "remove-from-cart"


# Add 10 products (with random quantity) from 2 categories to cart
def products_to_cart_test(total_cart_quantity):
    total_cart_quantity[0] = add_category_products_to_cart("category-6")
    total_cart_quantity[0] += add_category_products_to_cart("category-9")

    check_cart_count_number(total_cart_quantity)
    print("TEST - Adding 10 products from 2 categories to cart - has completed successfully!")

def add_category_products_to_cart(category_id):
    cart_quantity = 0
    for i in range(1,6):
        WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.ID, category_id))
        )
        first_category_link = driver.find_element(By.ID, category_id)
        first_category_link.click()

        WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.CLASS_NAME, PRODUCT_LINK_CLASSNAME))
        )
        product_link = driver.find_element(By.XPATH, f"(//a[@class='{PRODUCT_LINK_CLASSNAME_XPATH}'])[{i}]")
        product_link.click()

        WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.CLASS_NAME, ADD_TO_CART_BUTTON_CLASSNAME))
        )
        plus_one_button = driver.find_element(By.CLASS_NAME, PLUS_ONE_BUTTON_CLASSNAME)
        quantity_of_product = random.randint(1,5)
        for _ in range(quantity_of_product - 1):
            plus_one_button.click()
        add_to_cart_button = driver.find_element(By.CLASS_NAME, ADD_TO_CART_BUTTON_CLASSNAME)
        add_to_cart_button.click()
        cart_quantity += quantity_of_product

        close_cart_pop_up()

    return cart_quantity

# Search for product and add one random result to cart
def search_and_add_product_to_cart_test(search_text, total_cart_quantity):
    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, SEARCH_INPUT_CLASSNAME))
    )
    search_input = driver.find_element(By.CLASS_NAME, SEARCH_INPUT_CLASSNAME)
    search_input.send_keys(search_text + Keys.ENTER)

    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.CLASS_NAME, PRODUCT_LINK_CLASSNAME))
    )
    product_links = driver.find_elements(By.CLASS_NAME, PRODUCT_LINK_CLASSNAME)
    random_product = random.randint(0, len(product_links) - 1)
    product_links[random_product].click()

    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.CLASS_NAME, ADD_TO_CART_BUTTON_CLASSNAME))
    )
    add_to_cart_button = driver.find_element(By.CLASS_NAME, ADD_TO_CART_BUTTON_CLASSNAME)
    add_to_cart_button.click()
    total_cart_quantity[0] += 1

    close_cart_pop_up()

    check_cart_count_number(total_cart_quantity)
    print("TEST - Searching and adding random product to cart - has completed successfully!")

def close_cart_pop_up():
    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.element_to_be_clickable((By.XPATH, "//div[@id='blockcart-modal']//button[@data-dismiss='modal']"))
    )
    close_button = driver.find_element(By.XPATH, "//div[@id='blockcart-modal']//button[@data-dismiss='modal']")
    close_button.click()

def check_cart_count_number(total_cart_quantity):
    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, CART_COUNT_CLASSNAME))
    )
    cart_count = driver.find_element(By.CLASS_NAME, CART_COUNT_CLASSNAME)
    cart_count_text = cart_count.text
    cart_count_number = int(cart_count_text.strip('()'))
    assert total_cart_quantity[0] == cart_count_number, f"Expected {total_cart_quantity[0]} products, but got {cart_count_number}"

# Delete 3 products from cart
def delete_products_from_cart_test(total_cart_quantity):
    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, CART_LINK_CLASSNAME))
    )
    cart_link = driver.find_element(By.CLASS_NAME, CART_LINK_CLASSNAME)
    cart_link.click()

    for i in range(1,4):
        WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
            EC.presence_of_element_located((By.CLASS_NAME, PRODUCT_QUANTITY_CLASSNAME))
        )
        product_quantity = driver.find_element(By.XPATH, f"(//input[@class='{PRODUCT_QUANTITY_CLASSNAME_XPATH}'])[{i}]")
        delete_product_link = driver.find_element(By.XPATH, f"(//a[@class='{DELETE_PRODUCT_LINK_CLASSNAME_XPATH}'])[{i}]")
        delete_product_link.click()
        total_cart_quantity[0] -= int(product_quantity.get_attribute("value"))

    driver.refresh()
    check_cart_count_number(total_cart_quantity)
    print("TEST - Deleting 3 products from cart - has completed successfully!")


# Create Google Chrome webdriver to perform test actions
service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)
driver.get("http://localhost:8080/")

# Theoretical number of products which should be in the cart
total_cart_quantity = [0]
# Tests
products_to_cart_test(total_cart_quantity)
search_and_add_product_to_cart_test("czarny", total_cart_quantity)
delete_products_from_cart_test(total_cart_quantity)
time.sleep(7)

print("All tests have completed successfully!")
driver.quit()