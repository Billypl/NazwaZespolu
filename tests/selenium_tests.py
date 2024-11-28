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
FIRST_CATEGORY_ID = "category-6"
SECOND_CATEGORY_ID = "category-9"
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
LOGIN_LINK_CLASSNAME = "user-info"
REGISTER_LINK_CLASSNAME = "no-account"
REGISTER_GENDER_ID = "field-id_gender-1"
REGISTER_NAME_INPUT_ID = "field-firstname"
REGISTER_SURNAME_INPUT_ID = "field-lastname"
REGISTER_EMAIL_INPUT_ID = "field-email"
REGISTER_PASSWORD_INPUT_ID = "field-password"
REGISTER_BIRTHDATE_INPUT_ID = "field-birthday"
REGISTER_CHECKBOX1_NAME = "optin"
REGISTER_CHECKBOX2_NAME = "customer_privacy"
REGISTER_CHECKBOX3_NAME = "newsletter"
REGISTER_CHECKBOX4_NAME = "psgdpr"
REGISTER_SUBMIT_BUTTON_CLASSNAME = "btn.btn-primary.form-control-submit.float-xs-right"
LOGOUT_LINK_CLASSNAME = "logout.hidden-sm-down"
GO_TO_CHECKOUT_LINK_CLASSNAME = "checkout.cart-detailed-actions.js-cart-detailed-actions.card-block"
CHECKOUT_ADDRESS_ALIAS_INPUT_ID = "field-alias"
CHECKOUT_ADDRESS_COMPANY_INPUT_ID = "field-company"
CHECKOUT_ADDRESS_NIP_INPUT_ID = "field-vat_number"
CHECKOUT_ADDRESS_ADDRESS_INPUT_ID = "field-address1"
CHECKOUT_ADDRESS_ADDRESS_ADD_INFO_INPUT_ID = "field-address2"
CHECKOUT_ADDRESS_POSTCODE_INPUT_ID = "field-postcode"
CHECKOUT_ADDRESS_CITY_INPUT_ID = "field-city"
CHECKOUT_ADDRESS_PHONE_INPUT_ID = "field-phone"
CHECKOUT_ADDRESS_CONTINUE_BUTTON_NAME = "confirm-addresses"
CHECKOUT_STEP_COMPLETED_CLASSNAME = "checkout-step.-reachable.-complete.-clickable"
CHECKOUT_DELIVERY_CARRIER_ID = "delivery_option_2"
CHECKOUT_DELIVERY_INFO_ID = "delivery_message"
CHECKOUT_DELIVERY_CONTINUE_BUTTON_NAME = "confirmDeliveryOption"
CHECKOUT_PAYMENT_METHOD_ID = "payment-option-3"
CHECKOUT_PAYMENT_ACCEPT_TERMS_CHECKBOX_ID = "conditions_to_approve[terms-and-conditions]"
CHECKOUT_PAYMENT_SUBMIT_BUTTON_CLASSNAME = "btn.btn-primary.center-block"
ORDER_REFERENCE_VALUE_ID = "order-reference-value"


# Add 10 products (with random quantity) from 2 categories to cart
def products_to_cart_test(total_cart_quantity):
    total_cart_quantity[0] = add_category_products_to_cart(FIRST_CATEGORY_ID)
    total_cart_quantity[0] += add_category_products_to_cart(SECOND_CATEGORY_ID)

    check_cart_count_number(total_cart_quantity)
    print("TEST - Adding 10 products from 2 categories to cart (1) - has completed successfully!")

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
    print("TEST - Searching and adding random product to cart (2) - has completed successfully!")

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
    go_to_cart()

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
    print("TEST - Deleting 3 products from cart (3) - has completed successfully!")

# Register new user
def register_test():
    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, LOGIN_LINK_CLASSNAME))
    )
    login_link = driver.find_element(By.CLASS_NAME, LOGIN_LINK_CLASSNAME)
    login_link.click()

    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, REGISTER_LINK_CLASSNAME))
    )
    register_link = driver.find_element(By.CLASS_NAME, REGISTER_LINK_CLASSNAME)
    register_link.click()

    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, REGISTER_GENDER_ID))
    )
    gender_radio_button = driver.find_element(By.ID, REGISTER_GENDER_ID)
    gender_radio_button.click()
    name_input = driver.find_element(By.ID, REGISTER_NAME_INPUT_ID)
    name_input.send_keys("Jan")
    surname_input = driver.find_element(By.ID, REGISTER_SURNAME_INPUT_ID)
    surname_input.send_keys("Rogowski")
    email_input = driver.find_element(By.ID, REGISTER_EMAIL_INPUT_ID)
    email_input.send_keys("s193126@student.pg.edu.pl")
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

    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, LOGOUT_LINK_CLASSNAME))
    )

    print("TEST - Registering new account (4) - has completed successfully!")

def go_to_cart():
    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, CART_LINK_CLASSNAME))
    )
    cart_link = driver.find_element(By.CLASS_NAME, CART_LINK_CLASSNAME)
    cart_link.click()

# Go to cart and make an order for products in cart
def make_order_test():
    go_to_cart()

    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.CLASS_NAME, GO_TO_CHECKOUT_LINK_CLASSNAME))
    )
    checkout_link = driver.find_element(By.CLASS_NAME, GO_TO_CHECKOUT_LINK_CLASSNAME)
    checkout_link.click()

    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
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

    complete_steps = driver.find_elements(By.CLASS_NAME, CHECKOUT_STEP_COMPLETED_CLASSNAME)
    assert len(complete_steps) == 2, f"Expected 2 completed steps, but got {len(complete_steps)}" 

    print("TEST - Making an order (5) - has completed successfully!")

# Choose one of two possible shipping carriers
def choose_delivery_test():
    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, CHECKOUT_DELIVERY_CARRIER_ID))
    )
    delivery_carrier_radio_button = driver.find_element(By.ID, CHECKOUT_DELIVERY_CARRIER_ID)
    delivery_carrier_radio_button.click()
    delivery_info_input = driver.find_element(By.ID, CHECKOUT_DELIVERY_INFO_ID)
    delivery_info_input.send_keys("leleleel")
    continue_button = driver.find_element(By.NAME, CHECKOUT_DELIVERY_CONTINUE_BUTTON_NAME)
    continue_button.click()

    complete_steps = driver.find_elements(By.CLASS_NAME, CHECKOUT_STEP_COMPLETED_CLASSNAME)
    assert len(complete_steps) == 3, f"Expected 3 completed steps, but got {len(complete_steps)}"

    print("TEST - Choosing shipping carrier (7) - has completed successfully!")

# Choose payment on delivery method and submit the order
def choose_payment_method_and_submit_test():
    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, CHECKOUT_PAYMENT_METHOD_ID))
    )
    payment_method_radio_button = driver.find_element(By.ID, CHECKOUT_PAYMENT_METHOD_ID)
    payment_method_radio_button.click()
    accept_terms_checkbox = driver.find_element(By.ID, CHECKOUT_PAYMENT_ACCEPT_TERMS_CHECKBOX_ID)
    accept_terms_checkbox.click()
    submit_button = driver.find_element(By.CLASS_NAME, CHECKOUT_PAYMENT_SUBMIT_BUTTON_CLASSNAME)
    submit_button.click()

    WebDriverWait(driver, TIMEOUT_TIME_SEC).until(
        EC.presence_of_element_located((By.ID, ORDER_REFERENCE_VALUE_ID))
    )

    print("TEST - Choosing payment on delivery method and submitting and order (6,8) - has completed successfully!")


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
register_test()
make_order_test()
choose_delivery_test()
choose_payment_method_and_submit_test()
time.sleep(7)

print("All tests have completed successfully!")
driver.quit()