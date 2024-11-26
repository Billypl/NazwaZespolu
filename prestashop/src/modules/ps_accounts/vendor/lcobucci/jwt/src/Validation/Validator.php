<?php

namespace PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validation;

use PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token;
final class Validator implements \PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Validator
{
    public function assert(Token $token, Constraint ...$constraints)
    {
        if ($constraints === []) {
            throw new NoConstraintsGiven('No constraint given.');
        }
        $violations = [];
        foreach ($constraints as $constraint) {
            $this->checkConstraint($constraint, $token, $violations);
        }
        if ($violations) {
            throw RequiredConstraintsViolated::fromViolations(...$violations);
        }
    }
    /** @param ConstraintViolation[] $violations */
    private function checkConstraint(Constraint $constraint, Token $token, array &$violations)
    {
        try {
            $constraint->assert($token);
        } catch (ConstraintViolation $e) {
            $violations[] = $e;
        }
    }
    public function validate(Token $token, Constraint ...$constraints)
    {
        if ($constraints === []) {
            throw new NoConstraintsGiven('No constraint given.');
        }
        try {
            foreach ($constraints as $constraint) {
                $constraint->assert($token);
            }
            return \true;
        } catch (ConstraintViolation $e) {
            return \false;
        }
    }
}
