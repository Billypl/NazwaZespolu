# PrestaShop module library for MBO dependency

A helper to ease the download of [PS MBO (Marketplace in the Back Office)](https://github.com/PrestaShopCorp/ps_mbo) from the marketplace.
Starting from PrestaShop v8 a shop can be installed without any additional component, including a link to the marketplace. In this kind of installation, no additional module can be installed without being manually uploaded by the merchant on the modules page.

For extensions requiring other modules available on the marketplace on PrestaShop 8 Open Source, MBO should be installed first to make sure archives are found and can be downloaded on the marketplace.

## Installation

```
composer require prestashop/module-lib-mbo-adapter
```

## Version Guidance

| Version | Status         | Packagist           -| Namespace    | Repo                | Docs                | PHP Version  |
|---------|----------------|----------------------|--------------|---------------------|---------------------|--------------|
| 1.x     | Latest         | `prestashop/module-lib-mbo-adapter` | `Prestashop\ModuleLibMboInstaller` | [v1.x][lib-1-repo] | N/A                 | >=5.6   |

[lib-1-repo]: https://github.com/PrestaShopCorp/module-lib-mbo-installer/tree/main

## Usage

Actions and messages can be triggered if the module is missing from the shop.
This example would be called from your module.

### Retrieve details about module MBO

```php
$mboStatus = (new Prestashop\ModuleLibMboInstaller\Presenter)->present();

var_dump($mboStatus);
/*
Example output:
array(4) {
  ["isPresentOnDisk"]=>
  bool(false)
  ["isInstalled"]=>
  bool(false)
  ["isEnabled"]=>
  bool(false)
  ["version"]=>
  NULL
}
/*
```

### Trigger download and installation of MBO

Because we cannot provide additional endpoints on PrestaShop's router, you have to implement you own controller/route to trigger the installation.

```php
try {
    $mboInstaller = new Prestashop\ModuleLibMboInstaller\Installer(_PS_VERSION_);
    /** @var boolean */
    $result = $mboInstaller->installModule();
} catch (\Exception $e) {
    // Some errors can happen, i.e during initialization or download of the module
}
```
