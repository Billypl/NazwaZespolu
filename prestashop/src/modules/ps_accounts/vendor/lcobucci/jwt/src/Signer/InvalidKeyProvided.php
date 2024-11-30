<?php

namespace PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Signer;

use InvalidArgumentException;
use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Exception;
final class InvalidKeyProvided extends InvalidArgumentException implements Exception
{
    /**
     * @param string $details
     *
     * @return self
     */
    public static function cannotBeParsed($details)
    {
        return new self('It was not possible to parse your key, reason: ' . $details);
    }
    /** @return self */
    public static function incompatibleKey()
    {
        return new self('This key is not compatible with this signer');
    }
}
