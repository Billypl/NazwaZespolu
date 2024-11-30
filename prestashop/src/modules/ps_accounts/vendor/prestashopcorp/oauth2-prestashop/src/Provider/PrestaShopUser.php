<?php

namespace PrestaShop\OAuth2\Client\Provider;

use PrestaShop\Module\PsAccounts\Vendor\League\OAuth2\Client\Provider\ResourceOwnerInterface;
use PrestaShop\Module\PsAccounts\Vendor\League\OAuth2\Client\Tool\ArrayAccessorTrait;
class PrestaShopUser implements ResourceOwnerInterface
{
    use ArrayAccessorTrait;
    /**
     * Raw response
     *
     * @var array
     */
    protected $response;
    /**
     * Creates new resource owner.
     *
     * @param array $response
     */
    public function __construct(array $response = [])
    {
        $this->response = $response;
    }
    /**
     * Get resource owner uuid
     *
     * @return string
     */
    public function getId()
    {
        return $this->getValueByKey($this->response, 'sub');
    }
    /**
     * Get resource owner name
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->getValueByKey($this->response, 'name');
    }
    /**
     * Get resource owner email
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->getValueByKey($this->response, 'email');
    }
    /**
     * Get resource owner email verified
     *
     * @return string|null
     */
    public function getEmailVerified()
    {
        return $this->getValueByKey($this->response, 'email_verified');
    }
    /**
     * Get resource owner picture
     *
     * @return string|null
     */
    public function getPicture()
    {
        return $this->getValueByKey($this->response, 'picture');
    }
    /**
     * @return array
     */
    public function toArray()
    {
        return $this->response;
    }
}
