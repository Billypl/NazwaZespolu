<?php

namespace PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation\Constraint;

use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token;
use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation\Constraint;
use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation\ConstraintViolation;
final class IdentifiedBy implements Constraint
{
    /** @var string */
    private $id;
    /** @param string $id */
    public function __construct($id)
    {
        $this->id = $id;
    }
    public function assert(Token $token)
    {
        if (!$token->isIdentifiedBy($this->id)) {
            throw new ConstraintViolation('The token is not identified with the expected ID');
        }
    }
}
