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

use ps_metrics_module_v4_0_9\Segment;
class SegmentHelper
{
    /**
     * @var ConfigHelper
     */
    private $configHelper;
    /**
     * SegmentHelper constructor.
     *
     * @param ConfigHelper $configHelper
     *
     * @return void
     */
    public function __construct(\PrestaShop\Module\Ps_metrics\Helper\ConfigHelper $configHelper)
    {
        $this->configHelper = $configHelper;
    }
    /**
     * Init segment
     *
     * @return void
     */
    public function init()
    {
        Segment::init($this->configHelper->getSegmentApiKey());
    }
    /**
     * @param array $message
     *
     * @return void
     */
    public function track($message)
    {
        Segment::track($message);
    }
    /**
     * Flush segment
     *
     * @return void
     */
    public function flush()
    {
        Segment::flush();
    }
}
