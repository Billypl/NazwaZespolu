# Scraper

A simple web scraper for collecting data. This project is designed to be lightweight and easy to use, with customizable logging functionality.

## Features
- Scripts to initialize and manage products and categories in PrestaShop through web services
- Efficient data scraping.
- Configurable logging system to monitor and debug scraper behavior.
- Modular design for easy customization and extension.

# Table of contents
- [Scraper]() // todo
- [Initializer](#prestaphop-products-and-categories-initialization-scripts)

## File Structure

All initialization files are located in the `./data_import_scripts` directory.  
All scraper files are located in the `./data_scrape_scripts` directory.

# PrestaShop Products and Categories Initialization Scripts

## Steps to run
```bash
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

## Logging Configuration
The scraper generates logs to help you monitor its operation and troubleshoot issues. By default, logging is enabled. You can disable logging by updating the `LOGGING_ENABLED` variable in the `data_scrape_scripts` module.

### How to Disable Logs:
1. Open the `data_scrape_scripts` module.
2. Locate the `LOGGING_ENABLED` variable.
3. Set its value to `False`:
```python
   LOGGING_ENABLED = False
```
