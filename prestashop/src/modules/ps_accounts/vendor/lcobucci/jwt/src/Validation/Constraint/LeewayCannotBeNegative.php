<?php

namespace PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation\Constraint;

use InvalidArgumentException;
use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Exception;
final class LeewayCannotBeNegative extends InvalidArgumentException implements Exception
{
    /** @return self */
    public static function create()
    {
        return new self('Leeway cannot be negative');
    }
}
