<?php

namespace PrestaShop\Module\PsAccounts\Vendor;

\class_exists(\PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token\Plain::class, \false) || \class_alias(\PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token::class, \PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token\Plain::class);
\class_exists(\PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token\Signature::class, \false) || \class_alias(\PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Signature::class, \PrestaShop\Module\PsAccounts\Vendor\Lcobucci\JWT\Token\Signature::class);
