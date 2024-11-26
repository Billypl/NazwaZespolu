<?php

namespace ps_metrics_module_v4_0_9\Prestashop\ModuleLibMboInstaller;

use GuzzleHttp\Psr7\Request;
use ps_metrics_module_v4_0_9\Prestashop\ModuleLibGuzzleAdapter\ClientFactory;
use ps_metrics_module_v4_0_9\Prestashop\ModuleLibGuzzleAdapter\Interfaces\HttpClientInterface;
use PrestaShop\PrestaShop\Core\Addon\Module\ModuleManagerBuilder;
class Installer
{
    const ADDONS_URL = 'https://api-addons.prestashop.com';
    const MODULE_ID = 39574;
    const MODULE_NAME = 'ps_mbo';
    /**
     * @var HttpClientInterface
     */
    protected $marketplaceClient;
    /**
     * @var ModuleManagerBuilder
     */
    protected $moduleManagerBuilder;
    /**
     * @var string
     */
    protected $prestashopVersion;
    /**
     * @param string $prestashopVersion
     */
    public function __construct($prestashopVersion)
    {
        $moduleManagerBuilder = ModuleManagerBuilder::getInstance();
        if (\is_null($moduleManagerBuilder)) {
            throw new \Exception('ModuleManagerBuilder::getInstance() failed');
        }
        $this->marketplaceClient = (new ClientFactory())->getClient(['base_uri' => self::ADDONS_URL]);
        $this->moduleManagerBuilder = $moduleManagerBuilder;
        $this->prestashopVersion = $prestashopVersion;
    }
    /**
     * Installs ps_mbo module
     *
     * @return bool
     */
    public function installModule()
    {
        // On PrestaShop 1.7, the signature is install($source), with $source a module name or a path to an archive.
        // On PrestaShop 8, the signature is install(string $name, $source = null).
        if (\version_compare($this->prestashopVersion, '8.0.0', '>=')) {
            return $this->moduleManagerBuilder->build()->install(self::MODULE_NAME, $this->downloadModule());
        }
        return $this->moduleManagerBuilder->build()->install(self::MODULE_NAME);
    }
    /**
     * Downloads ps_mbo module source from addons, store it and returns the file name
     *
     * @return string
     */
    private function downloadModule()
    {
        $params = ['id_module' => self::MODULE_ID, 'channel' => 'stable', 'method' => 'module', 'version' => $this->prestashopVersion];
        $moduleData = $this->marketplaceClient->sendRequest(new Request('POST', '/?' . \http_build_query($params)))->getBody()->getContents();
        $temporaryZipFilename = \tempnam(\sys_get_temp_dir(), 'mod');
        if ($temporaryZipFilename === \false) {
            throw new \Exception('Cannot create temporary file in ' . \sys_get_temp_dir());
        }
        if (\file_put_contents($temporaryZipFilename, $moduleData) !== \false) {
            return $temporaryZipFilename;
        } else {
            throw new \Exception('Cannot store module content in temporary file !');
        }
    }
}
