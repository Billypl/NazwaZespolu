<?php

namespace Http\Client\Promise;

use Http\Client\Exception;
use ps_metrics_module_v4_0_9\Http\Promise\Promise;
final class HttpRejectedPromise implements Promise
{
    /**
     * @var Exception
     */
    private $exception;
    /**
     * @param Exception $exception
     */
    public function __construct(Exception $exception)
    {
        $this->exception = $exception;
    }
    /**
     * {@inheritdoc}
     */
    public function then(callable $onFulfilled = null, callable $onRejected = null)
    {
        if (null === $onRejected) {
            return $this;
        }
        try {
            return new \Http\Client\Promise\HttpFulfilledPromise($onRejected($this->exception));
        } catch (Exception $e) {
            return new self($e);
        }
    }
    /**
     * {@inheritdoc}
     */
    public function getState()
    {
        return Promise::REJECTED;
    }
    /**
     * {@inheritdoc}
     */
    public function wait($unwrap = \true)
    {
        if ($unwrap) {
            throw $this->exception;
        }
    }
}
