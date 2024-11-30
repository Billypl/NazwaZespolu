<?php

namespace PrestaShop\Module\PsAccounts\Vendor;

// Don't redefine the functions if included multiple times.
if (!\function_exists('PrestaShop\\Module\\PsAccounts\\Vendor\\GuzzleHttp\\Promise\\promise_for')) {
    require __DIR__ . '/functions.php';
}
