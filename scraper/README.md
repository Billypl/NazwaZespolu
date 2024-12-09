# Table of contents
- [Overview](#overview)
- [File Structure](#file-structure)
- [Features](#features)
- [Scraper](#scraper)
  - [Steps to Run](#steps-to-run)
  - [Configuration](#configuration)
- [Initializer](#prestashop-products-and-categories-initialization-scripts)
  - [Steps to Run](#steps-to-run-1)
  - [Execution Order](#execution-order)
  - [Configuration](#configuration-1)
- [FAQ](#faq)

## Overview
This project provides:
- A **Scraper** to collect data from web sources.
- **PrestaShop Initialization Scripts** to manage product and category data in a PrestaShop environment.

## File Structure

All scraper files are located in the `./data_scrape_scripts` directory.
All initialization files are located in the `./data_import_scripts` directory.  

## Features
- Scripts to initialize and manage products and categories in PrestaShop through web services
- Efficient data scraping.
- Configurable logging system to monitor and debug scraper behavior.
- Modular design for easy customization and extension.

# Scraper

A simple web scraper for collecting data, designed to be lightweight and easy to use.


## Steps to run
```bash
cd data_scrape_scripts
./prepare.sh
./run.sh
```

## Configuration

- Logging is enabled by default. To disable it, set the `LOGGING_ENABLED` variable to `False` in `config.py`.

### How to Disable Logs:
1. Open the `data_scrape_scripts` module.
2. Locate the `LOGGING_ENABLED` variable in `config.py`.
3. Set its value to `False`:
```python
   LOGGING_ENABLED = False
```

# PrestaShop Products and Categories Initialization Scripts

Scripts for initializing and managing products and categories in PrestaShop.


## Steps to run
```bash
cd data_import_scripts
./prepare.sh
./run.sh
```

## Execution Order

To initialize categories and products correctly, execute the scripts in the following order:
1. `delete_categories_in_id_range.py`
2. `delete_products_in_id_range.py`
3. `init_all_categories.py`
4. `init_products.py`

To specify the range of items to delete, set the `start_index` and `end_index` variables in the script. 

### Important Note:
- **Categories with IDs less than 3** are special and should not be deleted, as they are reserved by PrestaShop for specific purposes.

## Configuration

- Logging is enabled by default. To disable it, set the `LOGGING_ENABLED` variable to `False` in `config.py`.
- Indexes of removed categories can be set in `run.sh` with `DELETE_CATEGORY_ID_START` and `DELETE_CATEGORY_ID_END` (3, 20 -> to remove presta default categories)
- Indexes of removed products can be set in `run.sh` with `DELETE_PROCDUCT_ID_START` and `DELETE_PROCDUCT_ID_END` (0, 20 -> to remove presta default products)
- Amount of products to be set in `run.sh` with `PROCUCTS_TO_INITALIZE_COUNT` (-1 -> for all by default)

### How to Disable Logs:
1. Open the `data_import_scripts` module.
2. Locate the `LOGGING_ENABLED` variable in `config.py`.
3. Set its value to `False`:
```python
   LOGGING_ENABLED = False
```

# FAQ

**Q: What if run.sh fails with a permission error?**  
A: Ensure the script has execute permissions:

```bash
chmod +x run.sh
```
**Q: How do I debug script failures?**  
A: Check the .log files for detailed error messages.

**Q: What if I encounter a requests error?**  
A: Ensure that your PrestaShop instance is running and accessible.

1. The API URL in your .env is correct.
2. The PrestaShop web service is enabled and properly configured.
3. Your network connection is stable.
