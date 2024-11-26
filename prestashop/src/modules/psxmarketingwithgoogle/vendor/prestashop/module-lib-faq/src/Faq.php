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

use GuzzleHttp\Psr7\Request;
use Http\Client\Exception\HttpException;
use Http\Client\Exception\TransferException;
use Prestashop\ModuleLibGuzzleAdapter\ClientFactory;
use Psr\Http\Client\ClientInterface;

/**
 * Retrieve the FAQ of the module
 */
class Faq
{
    public const BASE_URL = 'https://api.addons.prestashop.com/request/faq/';

    /**
     * @var ClientInterface
     */
    private $client;

    /**
     * @var Parameters
     */
    private $parameters;

    /**
     * Method to call in case of error
     *
     * @var callable|null
     */
    private $errorCallable;

    /**
     * @param string $moduleKey
     * @param string $psVersion
     * @param string $isoCode
     */
    public function __construct($moduleKey, $psVersion, $isoCode, array $options = [])
    {
        $this->parameters = (new Parameters())
            ->setModuleKey($moduleKey)
            ->setPsVersion($psVersion)
            ->setIsoCode($isoCode);

        // Allow client options to be customized
        $options = array_merge_recursive([
            'base_url' => self::BASE_URL,
            // If available from PrestaShop, use _PS_CACHE_CA_CERT_FILE_ constant
            'verify' => defined('_PS_CACHE_CA_CERT_FILE_') && file_exists(constant('_PS_CACHE_CA_CERT_FILE_')) ? constant('_PS_CACHE_CA_CERT_FILE_') : true,
            'defaults' => [
                'timeout' => 10,
            ],
        ], $options);

        $this->client = (new ClientFactory())->getClient($options);
    }

    /**
     * Wrapper of method post from guzzle client
     *
     * @return array|false return response or false if no response
     */
    public function getFaq()
    {
        try {
            $response = $this->client->sendRequest(new Request('POST', $this->parameters->getFaqUri()));
        } catch (HttpException $e) {
            if (is_callable($this->errorCallable)) {
                call_user_func($this->errorCallable, $e);
            }
            $response = $e->getResponse();
        } catch (TransferException $e) {
            if (is_callable($this->errorCallable)) {
                call_user_func($this->errorCallable, $e);
            }

            return false;
        }

        $data = json_decode($response->getBody()->getContents(), true);

        return !empty($data['categories']) ? $data : false;
    }

    /**
     * @return ClientInterface
     */
    public function getClient()
    {
        return $this->client;
    }

    /**
     * @param ClientInterface $client
     *
     * @return self
     */
    public function setClient(ClientInterface $client)
    {
        $this->client = $client;

        return $this;
    }

    /**
     * Allow modules to run specific code in case of exception
     *
     * @return self
     */
    public function setErrorCallable(callable $c)
    {
        $this->errorCallable = $c;

        return $this;
    }
}
