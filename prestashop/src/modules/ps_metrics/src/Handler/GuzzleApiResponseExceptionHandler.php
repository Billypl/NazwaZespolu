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
namespace PrestaShop\Module\Ps_metrics\Handler;

class GuzzleApiResponseExceptionHandler
{
    /**
     * @var string
     */
    private $reasonPhrase;
    /**
     * @var mixed
     */
    private $content;
    /**
     * @var int
     */
    private $statusCode;
    /**
     * @return string
     */
    public function getReasonPhrase()
    {
        return $this->reasonPhrase;
    }
    /**
     * @param string $reasonPhrase
     *
     * @return void
     */
    public function setReasonPhrase(string $reasonPhrase)
    {
        $this->reasonPhrase = $reasonPhrase;
    }
    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }
    /**
     * @param mixed $content
     *
     * @return void
     */
    public function setContent($content)
    {
        $this->content = $content;
    }
    /**
     * @return int
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }
    /**
     * @param int $statusCode
     *
     * @return void
     */
    public function setStatusCode(int $statusCode)
    {
        $this->statusCode = $statusCode;
    }
    /**
     * GuzzleApiResponseExceptionHandler constructor.
     */
    public function __construct()
    {
    }
    /**
     * @param string $errorMessage
     *
     * @return $this
     */
    public function get(string $errorMessage)
    {
        $this->setStatusCode(500);
        $this->setContent(null);
        $this->setReasonPhrase($errorMessage);
        return $this;
    }
}
