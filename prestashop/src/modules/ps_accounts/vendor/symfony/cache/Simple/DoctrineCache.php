<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\Cache\Simple;

use PrestaShop\Module\PsAccounts\Vendor\Doctrine\Common\Cache\CacheProvider;
use PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\Cache\Traits\DoctrineTrait;
class DoctrineCache extends AbstractCache
{
    use DoctrineTrait;
    /**
     * @param string $namespace
     * @param int    $defaultLifetime
     */
    public function __construct(CacheProvider $provider, $namespace = '', $defaultLifetime = 0)
    {
        parent::__construct('', $defaultLifetime);
        $this->provider = $provider;
        $provider->setNamespace($namespace);
    }
}
