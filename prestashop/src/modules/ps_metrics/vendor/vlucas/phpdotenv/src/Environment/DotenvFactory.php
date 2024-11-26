<?php

namespace ps_metrics_module_v4_0_9\Dotenv\Environment;

use ps_metrics_module_v4_0_9\Dotenv\Environment\Adapter\AdapterInterface;
use ps_metrics_module_v4_0_9\Dotenv\Environment\Adapter\ApacheAdapter;
use ps_metrics_module_v4_0_9\Dotenv\Environment\Adapter\EnvConstAdapter;
use ps_metrics_module_v4_0_9\Dotenv\Environment\Adapter\PutenvAdapter;
use ps_metrics_module_v4_0_9\Dotenv\Environment\Adapter\ServerConstAdapter;
/**
 * The default implementation of the environment factory interface.
 */
class DotenvFactory implements FactoryInterface
{
    /**
     * The set of adapters to use.
     *
     * @var \Dotenv\Environment\Adapter\AdapterInterface[]
     */
    protected $adapters;
    /**
     * Create a new dotenv environment factory instance.
     *
     * If no adapters are provided, then the defaults will be used.
     *
     * @param \Dotenv\Environment\Adapter\AdapterInterface[]|null $adapters
     *
     * @return void
     */
    public function __construct(array $adapters = null)
    {
        $this->adapters = \array_filter($adapters === null ? [new ApacheAdapter(), new EnvConstAdapter(), new ServerConstAdapter(), new PutenvAdapter()] : $adapters, function (AdapterInterface $adapter) {
            return $adapter->isSupported();
        });
    }
    /**
     * Creates a new mutable environment variables instance.
     *
     * @return \Dotenv\Environment\VariablesInterface
     */
    public function create()
    {
        return new DotenvVariables($this->adapters, \false);
    }
    /**
     * Creates a new immutable environment variables instance.
     *
     * @return \Dotenv\Environment\VariablesInterface
     */
    public function createImmutable()
    {
        return new DotenvVariables($this->adapters, \true);
    }
}
