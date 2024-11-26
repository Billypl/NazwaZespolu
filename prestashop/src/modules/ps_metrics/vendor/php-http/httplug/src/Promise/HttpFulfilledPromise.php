<?php

namespace Http\Client\Promise;

use Http\Client\Exception;
use ps_metrics_module_v4_0_9\Http\Promise\Promise;
use Psr\Http\Message\ResponseInterface;
final class HttpFulfilledPromise implements Promise
{
    /**
     * @var ResponseInterface
     */
    private $response;
    /**
     * @param ResponseInterface $response
     */
    public function __construct(ResponseInterface $response)
    {
        $this->response = $response;
    }
    /**
     * {@inheritdoc}
     */
    public function then(callable $onFulfilled = null, callable $onRejected = null)
    {
        if (null === $onFulfilled) {
            return $this;
        }
        try {
            return new self($onFulfilled($this->response));
        } catch (Exception $e) {
            return new \Http\Client\Promise\HttpRejectedPromise($e);
        }
    }
    /**
     * {@inheritdoc}
     */
    public function getState()
    {
        return Promise::FULFILLED;
    }
    /**
     * {@inheritdoc}
     */
    public function wait($unwrap = \true)
    {
        if ($unwrap) {
            return $this->response;
        }
    }
}
