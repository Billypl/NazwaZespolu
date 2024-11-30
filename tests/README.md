# Selenium Tester
Welcome to my prestashop selenium tester, fellow developer.

# Requirements
- Selenium library

You can install it by running:
```bash
pip install selenium
```
- Google Chrome web browser

# How to run?
- Copy this folder to your Windows. 
- Install Selenium library
- Configure params to your need - read more in [Parameters](#parameters)
- Run the script
- Have fun finding errors!

# Parameters
Here are the most important parameters which you can find inside the "selenium_tests.py" script:

- DOWNLOAD_FOLDER_PATH - relative path, starting from your home directory, where selenium will save any downloaded files during tests. The folder will be automatically created if it doesn't exist. By default, folder called "presta-tmp" is created inside Downloads directory.
- AUTO_DELETE_INVOICE - boolean, determines whether to delete the DOWNLOAD_FOLDER_PATH after completion or not. Default value is set to False.
- PAGE_TIMEOUT_TIME_SEC, INVOICE_DOWNLOAD_TIMEOUT_SEC - time in seconds that selenium waits for elements to load. A timeout error is thrown if the elements do not load within this time.

# Important suggestion
Every test, a new account is created to test the registration process. Since account deletion is not supported, it is **recommended** to clear the user database from time to time. The same applies to orders. Though orders cannot be deleted, they should be marked as canceled. This allows us to restore the products and make them available again.

# Team
- Michał Pawiłojć 193159
- Krzysztof Rzeszotarski 193627
- Michał Węsiora 193126
- Julian Kulikowski 188898