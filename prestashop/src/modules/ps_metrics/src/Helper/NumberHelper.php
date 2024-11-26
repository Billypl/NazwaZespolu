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

class NumberHelper
{
    /**
     * Prevent division by 0
     *
     * @param int|float $number
     * @param int|float $byNumber
     *
     * @return int|float
     */
    public function division($number, $byNumber)
    {
        if (0 === $number) {
            return 0;
        }
        if (0 === $byNumber) {
            $byNumber = 1;
        }
        return $number / $byNumber;
    }
    /**
     * @param float $all
     * @param float $find
     *
     * @return float|int
     */
    public function percent($all, $find)
    {
        // To prevent division by 0
        if ($all != 0 && $find == 0) {
            return 100;
        }
        if ($all == 0) {
            return 0;
        }
        // Get the percentage of abandoned carts
        $percent = 100 - $find / $all * 100;
        return \round($percent, 2);
    }
}
