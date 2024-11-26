<?php

namespace ps_metrics_module_v4_0_9\Dotenv\Environment\Adapter;

use ps_metrics_module_v4_0_9\PhpOption\None;
use ps_metrics_module_v4_0_9\PhpOption\Some;
class ArrayAdapter implements AdapterInterface
{
    /**
     * The variables and their values.
     *
     * @return array<string|null>
     */
    private $variables = [];
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
        if (\array_key_exists($name, $this->variables)) {
            return Some::create($this->variables[$name]);
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
        $this->variables[$name] = $value;
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
        unset($this->variables[$name]);
    }
}
