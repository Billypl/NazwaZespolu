![PrestaShop Metrics preview](.github/pics/metrics-preview.webp)

# PrestaShop Metrics

[![Storybook CI/CD](https://github.com/PrestaShopCorp/ps_metrics/actions/workflows/ci-cd-storybook.yml/badge.svg)](https://github.com/PrestaShopCorp/ps_metrics/actions/workflows/ci-cd-storybook.yml)
[![PHP tests](https://github.com/PrestaShopCorp/ps_metrics/actions/workflows/php.yml/badge.svg)](https://github.com/PrestaShopCorp/ps_metrics/actions/workflows/php.yml)

## About

[PrestaShop Metrics](https://addons.prestashop.com/analytics-statistics/) allow you to drive your ecommerce performance and improve your business efficiency using a data-driven approach. Get a complete view of your business in real time and execute actionable optimization plans from your back-office.

**Take control of your ecommerce statistics**

- An intuitive and easy to use dashboard that saves time, no more switching between different applications
- Synchronization with Google Analytics: Easily install of a Google Analytics Tag and synchronize with your account to retrieve reliable traffic data. Compatible with Google Analytics v4.
- Cross-reference sales, orders, shopping carts and traffic data from the most reliable sources such as Google Analytics or your PrestaShop online store in a single interface
- Compare your activity by periods, visualize the evolution of your performance up to 24 months.
- Connect your store to Google Merchant Center and synchroniwe your entire product catalog in a few clicks. Product attributes such as price and availability will be automatically updated everyday.

**Save time with a revamped interface**

- Your key figures grouped in a way that makes it easier to read and to analyze them
- Traffic detailed by acquisition channel
- Understandable, usable, and relevant data
- Benefit from the customizable reporting tools such as CSV export or email reporting.

**Turn insights into actions**

Make informed decisions, create action plans and improve results through data integration.

## Download & Installation

Modules archives can be found and downloaded:

- On the [PrestaShop Addons Marketplace](https://addons.prestashop.com/analytics-statistics/49583-prestashop-metrics.html) (Latest stable release only)
- On the [releases page](https://github.com/PrestaShopCorp/ps_metrics/releases) of this repository (Stable & beta releases available)

Downloaded archives can be uploaded on PrestaShop instances, as detailed in the [user documentation](https://doc.prestashop.com/display/PS17/Modules+Selection#ModulesSelection-Uploadingamodulemanually).

## Developer

The project is divided in two sub project. The PHP is responsible for all PrestaShop oriented stuff and allow the installation of the module.
Front side is handled by a vuejs application that is hosted via a CDN (on GCP).
The following steps will explain how to build these different part and run the project locally.

### PHP

Retrieve dependencies with composer

```
composer install
```

In some cases, when you add or update php class, you may need to run `composer dump-autoload` in order to refresh the classmap.

### VUEJS

The following commands need to be run in the `apps/ui/` folder.

To build the application in production mode:

```
pnpm install
pnpm run build
```

The output directory is located in `apps/ui/dist/` directory.

To compiles and watch for new changes (development mode) once `npm install` was done:

```
pnpm run dev
```

### Tests / lint

**work in progress**

### Storybook

**Integration**

To trigger storybook CI/CD, create a new pull request
Tag with label Storybook Test will trigger the workflow.

Storybook will be available at this following url : [storybook](https://storybook-metrics.psessentials-integration.net)

**Production**

Production storybook CI/CD will automatically be triggered on push on develop.

Storybook will be available at this following url : [storybook](https://storybook-metrics.psessentials.net)

## Docker

**work in progress**

## CDN deploy

Release and pre release will trigger a storage action on [services-deployment](https://github.com/PrestaShopCorp/services-deployment) repository.
This action will build vuejs project and push assets to GCP storage.

On pre-release trigger, a new version will be stored and available at : https://storage.googleapis.com/psxmetrics/v1.1.1 (according to your tag name)

On release, 3 versions (major and minor) will be stored at :

- https://storage.googleapis.com/psxmetrics/latest
- https://storage.googleapis.com/psxmetrics/v1.1.x
- https://storage.googleapis.com/psxmetrics/v1.x.x

## Husky conventions

**work in progress**

## License

This module is released under the Academic Free License 3.0
