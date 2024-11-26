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
namespace PrestaShop\Module\Ps_metrics\Provider;

use PrestaShop\Module\Ps_metrics\Api\AnalyticsApi;
use PrestaShop\Module\Ps_metrics\Repository\ConfigurationRepository;
class AnalyticsAccountsListProvider
{
    /**
     * @var array
     */
    private $accountsList;
    /**
     * @var ConfigurationRepository
     */
    private $configurationRepository;
    /**
     * @var AnalyticsApi
     */
    private $analyticsApi;
    /**
     * AnalyticsAccountsListProvider constructor.
     *
     * @param ConfigurationRepository $configurationRepository
     * @param AnalyticsApi $analyticsApi
     */
    public function __construct(ConfigurationRepository $configurationRepository, AnalyticsApi $analyticsApi)
    {
        $this->analyticsApi = $analyticsApi;
        $this->accountsList = [];
        $this->configurationRepository = $configurationRepository;
    }
    /**
     * getAccountsList
     *
     * @return array
     */
    public function getAccountsList()
    {
        if (\false === $this->configurationRepository->getGoogleLinkedValue()) {
            return [];
        }
        $apiReturn = $this->analyticsApi->getAccountsList();
        return $this->formatAccountListArray($apiReturn);
    }
    /**
     * Get the selected account from the account list
     *
     * @return mixed
     */
    public function getSelectedAccount()
    {
        foreach ($this->accountsList as $uaTag => $accountData) {
            if (\true === $accountData['selected']) {
                $accountData['webPropertyId'] = $uaTag;
                return $accountData;
            }
        }
        return null;
    }
    /**
     * Get username
     *
     * @return string
     */
    public function getUserName()
    {
        if (\false === empty($this->accountsList)) {
            $webPropertyList = \array_keys($this->accountsList);
            $firstWebProperty = \current($webPropertyList);
            return $this->accountsList[$firstWebProperty]['username'];
        }
        return '';
    }
    /**
     * retrieveAccountsList
     *
     * @param array $accountList
     *
     * @return array
     */
    private function formatAccountListArray($accountList)
    {
        if (empty($accountList)) {
            return [];
        }
        foreach ($accountList as $accounts) {
            foreach ($accounts as $account) {
                foreach ($account as $key => $property) {
                    $this->accountsList[$key] = $property;
                    $this->accountsList[$key]['webPropertyId'] = $key;
                    $this->accountsList[$key]['typeSource'] = $property['type_source'];
                }
            }
        }
        return $this->accountsList;
    }
}
