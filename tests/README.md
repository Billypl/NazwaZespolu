# Table of contents
- [Overview](#overview)
- [Steps to Run](#steps-to-run)
- [Configuration](#configuration)
- [Important note](#important-note)
- [FAQ](#faq)

## Overview
This project provides a Selenium script to validate website functionality.

## Steps to run
```bash
./prepare.sh
./run.sh [-p]
```

-p is a flag for testing in production, so the script knows to use a different URL.

## Configuration
Here are the most important parameters which you can find inside the `config.py` script:

- `AUTO_DELETE_INVOICE` - boolean, determines whether to delete downloaded files after completion or not. Default value is set to `True`.
- `PAGE_TIMEOUT_TIME_SEC`, `INVOICE_DOWNLOAD_TIMEOUT_SEC` - time in seconds that selenium waits for elements to load. A timeout error is thrown if the elements do not load within this time. Consider increasing these if you get timeout errors.

# Important note
Every test, a new account is created to test the registration process. Since account deletion is not supported, it is **recommended** to clear the user database from time to time. The same applies to orders. Though orders cannot be deleted, they should be marked as canceled. This allows us to restore the products and make them available again.

# FAQ

**Q: What if run.sh fails with a permission error?**  
A: Ensure the script has execute permissions:

```bash
chmod +x run.sh
```