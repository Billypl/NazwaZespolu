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