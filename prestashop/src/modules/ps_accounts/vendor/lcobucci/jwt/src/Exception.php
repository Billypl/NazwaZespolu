<?php

namespace PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT;

if (\PHP_MAJOR_VERSION === 5) {
    interface Exception
    {
    }
} else {
    interface Exception extends \Throwable
    {
    }
}
