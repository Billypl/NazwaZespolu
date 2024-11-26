# prestashop-accounts-installer

Utility package to install `ps_accounts` module or present data to trigger manual install from psx configuration page.

This module also give you access to `ps_accounts` services through its module service container dealing with the installation status of the module.

## Installation

This package is available on [Packagist](https://packagist.org/packages/prestashop/prestashop-accounts-installer), 
you can install it via [Composer](https://getcomposer.org).

```shell script
composer require prestashop/prestashop-accounts-installer
```
## Register as a service in your PSx container (recommended)

Example :

```yaml
services:
  ps_accounts.installer:
    class: 'PrestaShop\PsAccountsInstaller\Installer\Installer'
    arguments:
      - '4.0.0'

  ps_accounts.facade:
    class: 'PrestaShop\PsAccountsInstaller\Installer\Facade\PsAccounts'
    arguments:
      - '@ps_accounts.installer'
```

## How to use it 

### Installer

In your module main class `install` method. (Will only do something on PrestaShop 1.7 and above)

```php
    $this->getService('ps_accounts.installer')->install();
```

### Presenter

For example in your main module's class `getContent` method.

```php
    Media::addJsDef([
        'contextPsAccounts' => $this->getService('ps_accounts.facade')
            ->getPsAccountsPresenter()
            ->present($this->name),
    ]);
```

This presenter will serve as default minimal presenter and switch to PsAccountsPresenter data when `ps_accounts` module is installed.

### Accessing PsAccounts Services

Installer class includes accessors to get instances of services from PsAccounts Module :

* getPsAccountsService
* getPsBillingService

The methods above will throw an exception in case `ps_accounts` module is not installed.

Example :

```php
use PrestaShop\PsAccountsInstaller\Installer\Exception\ModuleVersionException;
use PrestaShop\PsAccountsInstaller\Installer\Exception\ModuleNotInstalledException;

try {
    $psAccountsService = $this->getService('ps_accounts.facade')->getPsAccountsService();

    $shopJwt = $psAccountsService->getOrRefreshToken();

    $shopUuid = $psAccountsService->getShopUuidV4();

    $apiUrl = $psAccountsService->getAdminAjaxUrl();

    // Your code here

} catch (ModuleNotInstalledException $e) {

    // You handle exception here

} catch (ModuleVersionException $e) {

    // You handle exception here
}
```
