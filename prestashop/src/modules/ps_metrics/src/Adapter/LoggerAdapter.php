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
namespace PrestaShop\Module\Ps_metrics\Adapter;

use ps_metrics_module_v4_0_9\PrestaShopLogger;
use Psr\Log\LoggerInterface;
/**
 * Class that bridge the PrestaShop implementation of Logger with Psr Logger interface.
 */
class LoggerAdapter implements LoggerInterface
{
    /**
     * Detailed debug information
     */
    const DEBUG = 100;
    /**
     * Interesting events
     *
     * Examples: User logs in, SQL logs.
     */
    const INFO = 200;
    /**
     * Uncommon events
     */
    const NOTICE = 250;
    /**
     * Exceptional occurrences that are not errors
     *
     * Examples: Use of deprecated APIs, poor use of an API,
     * undesirable things that are not necessarily wrong.
     */
    const WARNING = 300;
    /**
     * Runtime errors
     */
    const ERROR = 400;
    /**
     * Critical conditions
     *
     * Example: Application component unavailable, unexpected exception.
     */
    const CRITICAL = 500;
    /**
     * Action must be taken immediately
     *
     * Example: Entire website down, database unavailable, etc.
     * This should trigger the SMS alerts and wake you up.
     */
    const ALERT = 550;
    /**
     * Urgent alert.
     */
    const EMERGENCY = 600;
    /**
     * {@inheritdoc}
     */
    public function emergency($message, array $context = [])
    {
        $this->log(static::EMERGENCY, $message, $context);
    }
    /**
     * {@inheritdoc}
     */
    public function alert($message, array $context = [])
    {
        $this->log(static::ALERT, $message, $context);
    }
    /**
     * {@inheritdoc}
     */
    public function critical($message, array $context = [])
    {
        $this->log(static::CRITICAL, $message, $context);
    }
    /**
     * {@inheritdoc}
     */
    public function error($message, array $context = [])
    {
        $this->log(static::ERROR, $message, $context);
    }
    /**
     * {@inheritdoc}
     */
    public function warning($message, array $context = [])
    {
        $this->log(static::WARNING, $message, $context);
    }
    /**
     * {@inheritdoc}
     */
    public function notice($message, array $context = [])
    {
        $this->log(static::NOTICE, $message, $context);
    }
    /**
     * {@inheritdoc}
     */
    public function info($message, array $context = [])
    {
        $this->log(static::INFO, $message, $context);
    }
    /**
     * {@inheritdoc}
     */
    public function debug($message, array $context = [])
    {
        $this->log(static::DEBUG, $message, $context);
    }
    /**
     * {@inheritdoc}
     */
    public function log($level, $message, array $context = [])
    {
        switch ($level) {
            case static::EMERGENCY:
            case static::ALERT:
            case static::CRITICAL:
                $severity = 4;
                break;
            case static::ERROR:
                $severity = 3;
                break;
            case static::WARNING:
                $severity = 2;
                break;
            case static::NOTICE:
            case static::INFO:
            case static::DEBUG:
            default:
                $severity = 1;
        }
        $errorCode = !empty($context['error_code']) ? (int) $context['error_code'] : null;
        $objectType = !empty($context['object_type']) ? $context['object_type'] : null;
        $objectId = !empty($context['object_id']) ? (int) $context['object_id'] : null;
        $allowDuplicate = !empty($context['allow_duplicate']) ? (bool) $context['allow_duplicate'] : \false;
        $idEmployee = !empty($context['id_employee']) ? (int) $context['id_employee'] : null;
        unset($context['error_code'], $context['object_type'], $context['object_id'], $context['allow_duplicate'], $context['id_employee']);
        PrestaShopLogger::addLog($message, $severity, $errorCode, $objectType, $objectId, $allowDuplicate, $idEmployee);
    }
}
