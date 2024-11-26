<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\Cache\Exception;

use PrestaShop\Module\PsAccounts\Vendor\Psr\Cache\InvalidArgumentException as Psr6CacheInterface;
use PrestaShop\Module\PsAccounts\Vendor\Psr\SimpleCache\InvalidArgumentException as SimpleCacheInterface;
class InvalidArgumentException extends \InvalidArgumentException implements Psr6CacheInterface, SimpleCacheInterface
{
}
