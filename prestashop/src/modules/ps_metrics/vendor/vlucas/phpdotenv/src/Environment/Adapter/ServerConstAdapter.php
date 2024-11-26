<?php

namespace ps_metrics_module_v4_0_9\Dotenv\Environment\Adapter;

use ps_metrics_module_v4_0_9\PhpOption\None;
use ps_metrics_module_v4_0_9\PhpOption\Some;
class ServerConstAdapter implements AdapterInterface
{
    /**
     * Determines if the adapter is supported.
     *
     * @return bool
     */
    public function isSupported()
    {
        return \true;
    }
    /**
     * Get an environment variable, if it exists.
     *
     * @param string $name
     *
     * @return \PhpOption\Option
     */
    public function get($name)
    {
        if (\array_key_exists($name, $_SERVER)) {
            return Some::create($_SERVER[$name]);
        }
        return None::create();
    }
    /**
     * Set an environment variable.
     *
     * @param string      $name
     * @param string|null $value
     *
     * @return void
     */
    public function set($name, $value = null)
    {
        $_SERVER[$name] = $value;
    }
    /**
     * Clear an environment variable.
     *
     * @param string $name
     *
     * @return void
     */
    public function clear($name)
    {
        unset($_SERVER[$name]);
    }
}
