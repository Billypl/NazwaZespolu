<?php

namespace ps_metrics_module_v4_0_9;

use ps_metrics_module_v4_0_9\PHPUnit\Framework\TestCase;
use ps_metrics_module_v4_0_9\Prestashop\ModuleLibMboInstaller\Installer;
use ps_metrics_module_v4_0_9\Prestashop\ModuleLibMboInstaller\Presenter;
class InstallationTest extends TestCase
{
    protected function setUp() : void
    {
        if (\version_compare(\_PS_VERSION_, '8.0.0', '<')) {
            global $kernel;
            $moduleManager = $kernel->getContainer()->get('prestashop.module.manager');
            $moduleManager->uninstall('ps_mbo', \true);
        }
    }
    public function testModuleIsInstalled()
    {
        $mboStatusBeforeInstall = (new Presenter())->present();
        // Expect module to be unknown
        $this->assertFalse($mboStatusBeforeInstall['isInstalled']);
        $this->assertFalse($mboStatusBeforeInstall['isEnabled']);
        // Install it...
        $this->assertTrue((new Installer(\_PS_VERSION_))->installModule());
        // Expect module to be installed now
        $mboStatusAfterInstall = (new Presenter())->present();
        $this->assertTrue($mboStatusAfterInstall['isPresentOnDisk']);
        $this->assertTrue($mboStatusAfterInstall['isInstalled']);
        // CheckMe: MBO appears as disabled on PS 1.7
        // $this->assertTrue($mboStatusAfterInstall['isEnabled']);
        $this->assertIsString($mboStatusAfterInstall['version']);
    }
}
