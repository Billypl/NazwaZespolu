# Scraper

A simple web scraper for collecting data. This project is designed to be lightweight and easy to use, with customizable logging functionality.

## Features
- Efficient data scraping.
- Configurable logging system to monitor and debug scraper behavior.
- Modular design for easy customization and extension.

## Logging Configuration
The scraper generates logs to help you monitor its operation and troubleshoot issues. By default, logging is enabled. You can disable logging by updating the `LOGGING_ENABLED` variable in the `data_scrape_scripts` module.

### How to Disable Logs:
1. Open the `data_scrape_scripts` module.
2. Locate the `LOGGING_ENABLED` variable.
3. Set its value to `False`:
   ```python
   LOGGING_ENABLED = False


# PrestaShop Products and Categories Initialization Scripts

This repository contains scripts to initialize and manage products and categories in PrestaShop through web services.

## File Structure

All initialization files are located in the `./data_import_scripts` directory.

## Configuration

- Logging is enabled by default. To disable it, set the `LOGGING_ENABLED` variable to `False` in `config.py`.

## Execution Order

To initialize categories and products correctly, execute the scripts in the following order:
1. `init_categories.py`
2. `init_products.py`

## Deletion Scripts

You can delete products and categories using the respective scripts:
- **Categories**: `delete_all_categories.py`
- **Products**: `delete_all_products.py`

To specify the range of items to delete, set the `start_index` and `end_index` variables in the script. 

### Important Note:
- **Categories with IDs less than 3** are special and should not be deleted, as they are reserved by PrestaShop for specific purposes.