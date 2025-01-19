DEV_WEBSITE_URL = "https://localhost:8443/"
PROD_WEBSITE_URL = "https://localhost:18889/"
# Relative to current directory
WEBDRIVER_PATH = "./tools/chromedriver-linux64/chromedriver"
BINARY_PATH = "./tools/chrome-headless-shell-linux64/chrome-headless-shell"

# Timout time for elements/pages to load
PAGE_TIMEOUT_TIME_SEC = 5

# Downloading file constants
AUTO_DELETE_INVOICE = True
INVOICE_DOWNLOAD_TIMEOUT_SEC = 10
# Relative to current directory
DOWNLOAD_FOLDER_PATH = "presta-downloads"

# Max random quantity of each product for test 1
MAX_PRODUCT_QUANTITY_TO_ADD = 1
# Max number of tries to find available product for test 2
MAX_ITERATIONS_TO_FIND_RANDOM_PRODUCT = 10

# Class names
FIRST_CATEGORY_ID = "category-13"
SECOND_CATEGORY_ID = "category-28"
PRODUCT_SEARCH_NAME = "czarny"
PRODUCT_LINK_CLASSNAME = "thumbnail.product-thumbnail"
PRODUCT_LINK_CLASSNAME_XPATH = "thumbnail product-thumbnail"
ADD_TO_CART_BUTTON_CLASSNAME = "btn.btn-primary.add-to-cart"
PLUS_ONE_BUTTON_CLASSNAME = "btn.btn-touchspin.js-touchspin.bootstrap-touchspin-up"
SEARCH_INPUT_CLASSNAME = "ui-autocomplete-input"
CART_LINK_CLASSNAME = "blockcart.cart-preview.active"
PRODUCT_QUANTITY_CLASSNAME_XPATH = "js-cart-line-product-quantity form-control"
DELETE_PRODUCT_LINK_CLASSNAME = "remove-from-cart"
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
CHECKOUT_DELIVERY_CARRIER_ID = "delivery_option_7"
CHECKOUT_DELIVERY_INFO_ID = "delivery_message"
CHECKOUT_DELIVERY_CONTINUE_BUTTON_NAME = "confirmDeliveryOption"
CHECKOUT_PAYMENT_METHOD_ID = "payment-option-2"
CHECKOUT_PAYMENT_ACCEPT_TERMS_CHECKBOX_ID = "conditions_to_approve[terms-and-conditions]"
CHECKOUT_PAYMENT_SUBMIT_BUTTON_CLASSNAME = "btn.btn-primary.center-block"
ORDER_REFERENCE_VALUE_ID = "order-reference-value"
ACCOUNT_LINK_CLASSNAME = "account"
ORDER_DETAILS_LINK_ID = "history-link"
ORDER_STATUS_CLASSNAME = "label.label-pill.bright"
DOWNLOAD_INVOICE_LINK_CLASSNAME = "text-sm-center.hidden-md-down"
CART_PRODUCT_QUANTITY_COUNT_CLASSNAME = "js-cart-line-product-quantity.form-control"
PRODUCT_AVAIBLE_ID = "product-availability"
CART_POP_UP_CLOSE_ID = "blockcart-modal"