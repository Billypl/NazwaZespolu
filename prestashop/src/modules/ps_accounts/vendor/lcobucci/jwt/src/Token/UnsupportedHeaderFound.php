<?php

namespace PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token;

use InvalidArgumentException;
use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Exception;
final class UnsupportedHeaderFound extends InvalidArgumentException implements Exception
{
    /** @return self */
    public static function encryption()
    {
        return new self('Encryption is not supported yet');
    }
}
