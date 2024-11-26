<?php

namespace PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT;

use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation\Constraint;
use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation\NoConstraintsGiven;
use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation\RequiredConstraintsViolated;
interface Validator
{
    /**
     * @throws RequiredConstraintsViolated
     * @throws NoConstraintsGiven
     */
    public function assert(Token $token, Constraint ...$constraints);
    /**
     * @return bool
     *
     * @throws NoConstraintsGiven
     */
    public function validate(Token $token, Constraint ...$constraints);
}
