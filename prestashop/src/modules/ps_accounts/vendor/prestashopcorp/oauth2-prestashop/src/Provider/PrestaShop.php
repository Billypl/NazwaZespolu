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
namespace PrestaShop\OAuth2\Client\Provider;

use PrestaShop\Module\PsAccounts\Vendor\League\OAuth2\Client\Provider\AbstractProvider;
use PrestaShop\Module\PsAccounts\Vendor\League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use PrestaShop\Module\PsAccounts\Vendor\League\OAuth2\Client\Token\AccessToken;
use PrestaShop\Module\PsAccounts\Vendor\League\OAuth2\Client\Tool\BearerAuthorizationTrait;
use PrestaShop\Module\PsAccounts\Vendor\Psr\Http\Message\ResponseInterface;
class PrestaShop extends AbstractProvider
{
    use BearerAuthorizationTrait;
    use \PrestaShop\OAuth2\Client\Provider\LogoutTrait;
    /**
     * @var string If set, will be sent as the "prompt" parameter
     *
     * @see https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    protected $prompt;
    /**
     * @var string[] If set, will be sent as the "acr_values" parameter
     *
     * @see https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    protected $acrValues;
    /**
     * @var string[] If set, will be sent as the "ui_locales" parameter. A space-separated list of BCP47 [RFC5646] language tag values, ordered by preference
     *
     * @see https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    protected $uiLocales;
    /**
     * @var WellKnown
     */
    protected $wellKnown;
    /**
     * @var bool
     */
    protected $verify = \true;
    /**
     * @param array $options
     * @param array $collaborators
     *
     * @throws \Exception
     */
    public function __construct(array $options = [], array $collaborators = [])
    {
        parent::__construct($options, $collaborators);
    }
    /**
     * @return string
     */
    public function getOauth2Url()
    {
        return 'https://oauth.prestashop.com';
    }
    /**
     * @return WellKnown
     */
    public function getWellKnown()
    {
        /* @phpstan-ignore-next-line */
        if (!isset($this->wellKnown)) {
            try {
                $this->wellKnown = new \PrestaShop\OAuth2\Client\Provider\WellKnown($this->fetchWellKnown($this->getOauth2Url(), $this->verify));
            } catch (\Error $e) {
            } catch (\Exception $e) {
            }
            if (isset($e)) {
                $this->wellKnown = new \PrestaShop\OAuth2\Client\Provider\WellKnown();
            }
        }
        return $this->wellKnown;
    }
    /**
     * @param string $url
     * @param bool $secure
     *
     * @return array
     *
     * @throws \Exception
     */
    protected function fetchWellKnown($url, $secure = \true)
    {
        $wellKnownUrl = $url;
        if (\strpos($wellKnownUrl, '/.well-known') === \false) {
            $wellKnownUrl = \preg_replace('/\\/?$/', '/.well-known/openid-configuration', $wellKnownUrl);
        }
        $response = $this->getResponse($this->getRequest('GET', $wellKnownUrl));
        return \json_decode($response->getBody(), \true);
    }
    /**
     * @return string
     */
    public function getBaseAuthorizationUrl()
    {
        return $this->getWellKnown()->authorization_endpoint;
    }
    /**
     * @param array $params
     *
     * @return string
     */
    public function getBaseAccessTokenUrl(array $params)
    {
        return $this->getWellKnown()->token_endpoint;
    }
    /**
     * @param AccessToken $token
     *
     * @return string
     */
    public function getResourceOwnerDetailsUrl(AccessToken $token)
    {
        return $this->getWellKnown()->userinfo_endpoint;
    }
    /**
     * @param array $options
     *
     * @return string[]
     */
    protected function getAuthorizationParameters(array $options)
    {
        if (empty($options['prompt']) && $this->prompt) {
            $options['prompt'] = $this->prompt;
        }
        if (empty($options['acr_values']) && \is_array($this->acrValues)) {
            $options['acr_values'] = \join(' ', $this->acrValues);
        }
        if (empty($options['ui_locales']) && \is_array($this->uiLocales)) {
            $options['ui_locales'] = \join(' ', $this->uiLocales);
        }
        $options = parent::getAuthorizationParameters($options);
        return $options;
    }
    /**
     * @return string[]
     */
    public function getDefaultScopes()
    {
        return ['openid', 'offline_access'];
    }
    /**
     * @return string
     */
    protected function getScopeSeparator()
    {
        return ' ';
    }
    /**
     * @param ResponseInterface $response
     * @param $data
     *
     * @return void
     *
     * @throws IdentityProviderException
     */
    protected function checkResponse(ResponseInterface $response, $data)
    {
        if ($response->getStatusCode() !== 200) {
            $errorDescription = '';
            $error = '';
            if (\is_array($data) && !empty($data)) {
                $errorDescription = isset($data['error_description']) ? $data['error_description'] : $data['message'];
                $error = $data['error'];
            }
            throw new IdentityProviderException(\sprintf('%d - %s: %s', $response->getStatusCode(), $error, $errorDescription), $response->getStatusCode(), $data);
        }
    }
    /**
     * @param array $response
     * @param AccessToken $token
     *
     * @return PrestaShopUser
     */
    protected function createResourceOwner(array $response, AccessToken $token)
    {
        return new \PrestaShop\OAuth2\Client\Provider\PrestaShopUser($response);
    }
    /**
     * Requests and returns the resource owner of given access token.
     *
     * @param AccessToken $token
     *
     * @return PrestaShopUser
     */
    public function getResourceOwner(AccessToken $token)
    {
        /** @var PrestaShopUser $resourceOwner */
        $resourceOwner = parent::getResourceOwner($token);
        return $resourceOwner;
    }
}
