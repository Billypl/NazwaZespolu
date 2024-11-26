{**
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
 *}

<div id="metrics-app"></div>

{if $useLocalVueApp == false}
  <link rel="stylesheet" href="{$pathAssetsCdn|escape}" type="text/css" media="all">
{elseif $useLocalVueApp == true and $useBuildModeOnly == true}
  <link rel="stylesheet" href="{$pathAssetsBuilded|escape}" type="text/css" media="all">
{/if}

{if $useLocalVueApp == true}
  {if $useBuildModeOnly == true}
    <script type="module" src="{$pathAppBuilded|escape:'htmlall':'UTF-8'}"></script>
  {else}
    <script type="module" src="https://localhost:3001/@vite/client"></script>
    <script type="module" src="https://localhost:3001/src/main.ts"></script>
  {/if}
{else}
  <script type="module" src="{$pathAppCdn|escape:'htmlall':'UTF-8'}"></script>
{/if}
