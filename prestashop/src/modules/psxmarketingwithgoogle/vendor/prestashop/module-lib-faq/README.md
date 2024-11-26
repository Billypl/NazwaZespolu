# PrestaShop module library for FAQ

This library retrieves the FAQ (Frequently Asked Questions) content from PrestaShop APIs.

It is most likely to be used in PrestaShop modules, but can be integrated in any PHP project.

This library is compatible with PHP 5.6 and above.

## Installation

```
composer require prestashop/module-lib-faq
```

## Usage

* Common case

    The simplest way to use this library is:

    ```php
    use PrestaShop\ModuleLibFaq\Faq;

    // [...]

    $faq = new Faq('your module key', _PS_VERSION, 'the current iso code');
    $faqContent = $faq->getFaq();
    ```

* With additional code to run in case of error

    ```php
    use PrestaShop\ModuleLibFaq\Faq;

    // [...]

    $faq = new Faq('your module key', _PS_VERSION, 'the current iso code');
    $faq->setErrorCallable(function(\Exception $e) { /* send to logger */ });
    $faqContent = $faq->getFaq();
    ```

The content returned is an array of categories, each of them having an array of questions/answers.

Example of json that will be `json_decode`d by the library:

```json
{
    "id_faq": 117,
    "module_key": "82bc76354cfef947e06f1cc78f5efe2e",
    "id_product": 46347,
    "categories": [
        {
            "id_faq_category": 142,
            "position": 1,
            "id_faq": 117,
            "title": "Questions about payments",
            "blocks": [
                {
                    "id_faq_block": 522,
                    "question": "Will my customers be able to see the PrestaShop Checkout payment method?",
                    "answer": "No, PrestaShop Checkout is the name of the service and the module. Your customers will only see the payment methods they are already familiar with including: credit card, PayPal, and/or another major payment method used in their country.",
                    "version_min": "",
                    "version_max": ""
                },
            ]
        },
        {
            "id_faq_category": 141,
            "position": 2,
            "id_faq": 117,
            "title": "Questions about refund feature",
            "blocks": [
                {
                    "id_faq_block": 521,
                    "question": "I am trying to issue a refund for a PrestaShop order, but an error message says, “Capture could not be refunded due to insufficient funds.” However, I know I have the funds in my PayPal account.",
                    "answer": "For refunds for an order paid for using a different currency than the ones available on your PayPal account, you have two options:\n\n- Adding all the currencies covered in your store to your PayPal account to avoid rejections of cross-currency transactions and any refund issues.\n\nTo do so, go to paypal.com > Login > Settings > My Money > Currencies management > Add a currency\n\n- Contacting PayPal and asking them to activate the cross-currency refund option. (Via the \"\"Contact us\"\" tab on paypal.com).",
                    "version_min": "",
                    "version_max": ""
                }
            ]
        }
    ]
}
```
