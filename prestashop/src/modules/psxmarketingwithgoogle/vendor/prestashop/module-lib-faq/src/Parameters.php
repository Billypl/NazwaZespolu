<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */

namespace PrestaShop\ModuleLibFaq;

class Parameters
{
    /**
     * Module key to identify on which module we will retrieve the faq
     *
     * @var string
     */
    private $moduleKey;

    /**
     * The version of PrestaShop
     *
     * @var string
     */
    private $psVersion;

    /**
     * In which language the faq will be retrieved
     *
     * @var string
     */
    private $isoCode;

    /**
     * Generate the route to retrieve the faq
     *
     * @return string route
     */
    public function getFaqUri()
    {
        return $this->getModuleKey() . '/' . $this->getPsVersion() . '/' . $this->getIsoCode();
    }

    /**
     * @param string $moduleKey
     *
     * @return self
     */
    public function setModuleKey($moduleKey)
    {
        $this->moduleKey = $moduleKey;

        return $this;
    }

    /**
     * @param string $psVersion
     *
     * @return self
     */
    public function setPsVersion($psVersion)
    {
        $this->psVersion = $psVersion;

        return $this;
    }

    /**
     * @param string $isoCode
     *
     * @return self
     */
    public function setIsoCode($isoCode)
    {
        $this->isoCode = $isoCode;

        return $this;
    }

    /**
     * @return string
     */
    public function getIsoCode()
    {
        return $this->isoCode;
    }

    /**
     * @return string
     */
    public function getPsVersion()
    {
        return $this->psVersion;
    }

    /**
     * @return string
     */
    public function getModuleKey()
    {
        return $this->moduleKey;
    }
}
