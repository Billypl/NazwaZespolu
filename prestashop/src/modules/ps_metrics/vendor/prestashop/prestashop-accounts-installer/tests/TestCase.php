<?php

namespace ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Tests;

use ps_metrics_module_v4_0_9\Faker\Generator;
class TestCase extends \ps_metrics_module_v4_0_9\PHPUnit\Framework\TestCase
{
    /**
     * @var Generator
     */
    public $faker;
    /**
     * @return void
     */
    protected function setUp()
    {
        parent::setUp();
        $this->faker = \ps_metrics_module_v4_0_9\Faker\Factory::create();
    }
}
