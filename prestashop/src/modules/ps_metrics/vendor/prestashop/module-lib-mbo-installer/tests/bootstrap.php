<?php

namespace ps_metrics_module_v4_0_9;

if (!\getenv('_PS_ROOT_DIR_')) {
    echo "[ERROR] Define _PS_ROOT_DIR_ with the path to PrestaShop folder\n";
    exit(1);
}
if (!\defined('_PS_ADMIN_DIR_')) {
    \define('_PS_ADMIN_DIR_', '/admin');
}
if (!\defined('_PS_MODE_DEV_')) {
    \define('_PS_MODE_DEV_', \true);
}
$rootDirectory = \getenv('_PS_ROOT_DIR_');
require_once $rootDirectory . '/config/config.inc.php';
global $kernel;
if (!$kernel) {
    require_once \_PS_ROOT_DIR_ . '/app/AppKernel.php';
    $kernel = new \ps_metrics_module_v4_0_9\AppKernel('dev', \true);
    $kernel->boot();
}
