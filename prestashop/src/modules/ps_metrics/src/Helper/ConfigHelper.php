<?php

/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */
namespace PrestaShop\Module\Ps_metrics\Helper;

use PrestaShop\Module\Ps_metrics\Config\Env;
class ConfigHelper
{
    /**
     * @var Env
     */
    private $env;
    /**
     * __construct
     *
     * @param Env $env
     *
     * @return void
     */
    public function __construct(Env $env)
    {
        $this->env = $env;
    }
    /**
     * Get webservice url
     *
     * @return string
     */
    public function getApiBaseUrl()
    {
        return $this->env->get('PHP_METRICS_API_URL');
    }
    /**
     * Get segment api key
     *
     * @return string
     */
    public function getSegmentApiKey()
    {
        return $this->env->get('SEGMENT_API_KEY');
    }
    /**
     * Get metrics cdn url
     *
     * @return string
     */
    public function getPsMetricsCdnUrl()
    {
        return $this->env->get('PS_METRICS_CDN_URL');
    }
    /**
     * Get metrics cdn enabled
     *
     * @return bool
     */
    public function getUseLocalVueApp()
    {
        return 'false' === $this->env->get('USE_LOCAL_VUE_APP') ? \false : \true;
    }
    /**
     * Get metrics cdn enabled
     *
     * @return bool
     */
    public function getUseBuildModeOnly()
    {
        return 'false' === $this->env->get('USE_BUILD_MODE_ONLY') ? \false : \true;
    }
}
