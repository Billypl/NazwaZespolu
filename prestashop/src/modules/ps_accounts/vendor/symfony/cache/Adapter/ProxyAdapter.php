<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\Cache\Adapter;

use PrestaShop\Module\PsAccounts\Vendor\Psr\Cache\CacheItemInterface;
use PrestaShop\Module\PsAccounts\Vendor\Psr\Cache\CacheItemPoolInterface;
use PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\Cache\CacheItem;
use PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\Cache\PruneableInterface;
use PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\Cache\ResettableInterface;
use PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\Cache\Traits\ProxyTrait;
/**
 * @author Nicolas Grekas <p@tchwork.com>
 */
class ProxyAdapter implements AdapterInterface, PruneableInterface, ResettableInterface
{
    use ProxyTrait;
    private $namespace;
    private $namespaceLen;
    private $createCacheItem;
    private $poolHash;
    private $defaultLifetime;
    /**
     * @param string $namespace
     * @param int    $defaultLifetime
     */
    public function __construct(CacheItemPoolInterface $pool, $namespace = '', $defaultLifetime = 0)
    {
        $this->pool = $pool;
        $this->poolHash = $poolHash = \spl_object_hash($pool);
        $this->namespace = '' === $namespace ? '' : CacheItem::validateKey($namespace);
        $this->namespaceLen = \strlen($namespace);
        $this->defaultLifetime = $defaultLifetime;
        $this->createCacheItem = \Closure::bind(static function ($key, $innerItem) use($poolHash) {
            $item = new CacheItem();
            $item->key = $key;
            $item->poolHash = $poolHash;
            if (null !== $innerItem) {
                $item->value = $innerItem->get();
                $item->isHit = $innerItem->isHit();
                $item->innerItem = $innerItem;
                $innerItem->set(null);
            }
            return $item;
        }, null, CacheItem::class);
    }
    /**
     * {@inheritdoc}
     */
    public function getItem($key)
    {
        $f = $this->createCacheItem;
        $item = $this->pool->getItem($this->getId($key));
        return $f($key, $item);
    }
    /**
     * {@inheritdoc}
     */
    public function getItems(array $keys = [])
    {
        if ($this->namespaceLen) {
            foreach ($keys as $i => $key) {
                $keys[$i] = $this->getId($key);
            }
        }
        return $this->generateItems($this->pool->getItems($keys));
    }
    /**
     * {@inheritdoc}
     */
    public function hasItem($key)
    {
        return $this->pool->hasItem($this->getId($key));
    }
    /**
     * {@inheritdoc}
     */
    public function clear()
    {
        return $this->pool->clear();
    }
    /**
     * {@inheritdoc}
     */
    public function deleteItem($key)
    {
        return $this->pool->deleteItem($this->getId($key));
    }
    /**
     * {@inheritdoc}
     */
    public function deleteItems(array $keys)
    {
        if ($this->namespaceLen) {
            foreach ($keys as $i => $key) {
                $keys[$i] = $this->getId($key);
            }
        }
        return $this->pool->deleteItems($keys);
    }
    /**
     * {@inheritdoc}
     */
    public function save(CacheItemInterface $item)
    {
        return $this->doSave($item, __FUNCTION__);
    }
    /**
     * {@inheritdoc}
     */
    public function saveDeferred(CacheItemInterface $item)
    {
        return $this->doSave($item, __FUNCTION__);
    }
    /**
     * {@inheritdoc}
     */
    public function commit()
    {
        return $this->pool->commit();
    }
    private function doSave(CacheItemInterface $item, $method)
    {
        if (!$item instanceof CacheItem) {
            return \false;
        }
        $item = (array) $item;
        $expiry = $item["\x00*\x00expiry"];
        if (null === $expiry && 0 < $this->defaultLifetime) {
            $expiry = \time() + $this->defaultLifetime;
        }
        if ($item["\x00*\x00poolHash"] === $this->poolHash && $item["\x00*\x00innerItem"]) {
            $innerItem = $item["\x00*\x00innerItem"];
        } elseif ($this->pool instanceof AdapterInterface) {
            // this is an optimization specific for AdapterInterface implementations
            // so we can save a round-trip to the backend by just creating a new item
            $f = $this->createCacheItem;
            $innerItem = $f($this->namespace . $item["\x00*\x00key"], null);
        } else {
            $innerItem = $this->pool->getItem($this->namespace . $item["\x00*\x00key"]);
        }
        $innerItem->set($item["\x00*\x00value"]);
        $innerItem->expiresAt(null !== $expiry ? \DateTime::createFromFormat('U', $expiry) : null);
        return $this->pool->{$method}($innerItem);
    }
    private function generateItems($items)
    {
        $f = $this->createCacheItem;
        foreach ($items as $key => $item) {
            if ($this->namespaceLen) {
                $key = \substr($key, $this->namespaceLen);
            }
            (yield $key => $f($key, $item));
        }
    }
    private function getId($key)
    {
        CacheItem::validateKey($key);
        return $this->namespace . $key;
    }
}
