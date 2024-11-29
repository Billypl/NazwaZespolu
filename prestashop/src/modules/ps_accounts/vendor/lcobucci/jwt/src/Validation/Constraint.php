<?php

namespace PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation;

use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token;
interface Constraint
{
    /** @throws ConstraintViolation */
    public function assert(Token $token);
}
