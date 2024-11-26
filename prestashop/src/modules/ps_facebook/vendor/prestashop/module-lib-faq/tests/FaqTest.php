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

namespace PrestaShop\ModuleLibFaq\Tests;

use Exception;
use GuzzleHttp\Psr7\Response as Psr7Response;
use Http\Client\Exception\TransferException;
use Http\Mock\Client;
use PHPUnit\Framework\TestCase;
use PrestaShop\ModuleLibFaq\Faq;
use Psr\Http\Client\ClientInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class FaqTest extends TestCase
{
    /**
     * This is not a unit test, as it runs the call to the marketplace
     * Data for PS Checkout module
     */
    public function testWorkingTest()
    {
        $faq = new Faq('82bc76354cfef947e06f1cc78f5efe2e', '1.7.5.2', 'fr');

        $faq->setClient(new class() implements ClientInterface {
            public function sendRequest(RequestInterface $request): ResponseInterface
            {
                return new Psr7Response(200, [], file_get_contents('tests/faqExample.json'));
            }
        });
        $faqContent = $faq->getFaq();

        $this->assertInternalType('array', $faqContent);
        $this->assertTrue(count($faqContent) > 0);
    }

    /**
     * Mock Client so we fake an HTTP error
     */
    public function testCallableIsTriggered()
    {
        $faq = (new Faq('<InvalidKey>', '1.7.5.2', 'fr'));

        $client = new Client();
        $faq->setClient($client);

        $exception = new TransferException('Server error response [url] https://api.addons.prestashop.com/request/faq/%3CInvalidKey%3E/1.7.5.2/fr [status code] 500 [reason phrase] Internal Server Error');
        $client->addException($exception);
        /**
         * we create here a callable that will be triggered because of the error during the API call.
         *
         * It provides an example in which we retrieve the exception in the caller.
         */
        $message = false;
        $callable = function (Exception $e) use (&$message) {
            $message = $e->getMessage();
        };
        $faq->setErrorCallable($callable);

        /**
         * Run test
         */
        $faqContent = $faq->getFaq();
        $this->assertSame(false, $faqContent);
        $this->assertSame(
            'Server error response [url] https://api.addons.prestashop.com/request/faq/%3CInvalidKey%3E/1.7.5.2/fr [status code] 500 [reason phrase] Internal Server Error',
            $message
        );
    }

    public function testCallableIsNotCalledByDefault()
    {
        $faq = (new Faq('<InvalidKey>', '1.7.5.2', 'fr'));

        /*
         * Mock of the API
         */
        $faq->setClient(new class() implements ClientInterface {
            public function sendRequest(RequestInterface $request): ResponseInterface
            {
                return new Psr7Response(200);
            }
        });

        /**
         * Create error callable
         */
        $callable = function () {
            throw new Exception('The callable should not be called!');
        };
        $faq->setErrorCallable($callable);

        /**
         * Run test
         */
        $faqContent = $faq->getFaq();
        $this->assertSame(false, $faqContent);
    }
}
