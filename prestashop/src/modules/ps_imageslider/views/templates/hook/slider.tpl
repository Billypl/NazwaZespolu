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

{if $homeslider.slides}
  <div class="homeslider-container" data-interval="{$homeslider.speed}" data-wrap="{$homeslider.wrap}" data-pause="{$homeslider.pause}">
    <ul class="rslides">
      {foreach from=$homeslider.slides item=slide}
        <li class="slide">
          {if !empty($slide.url)}<a href="{$slide.url}">{/if}
            <img src="{$slide.image_url}" alt="{$slide.legend|escape}" />
            {if $slide.title || $slide.description }
              <span class="caption">
                <h2>{$slide.title}</h2>
                <div>{$slide.description nofilter}</div>
              </span>
            {/if}
          {if !empty($slide.url)}</a>{/if}
        </li>
      {/foreach}
    </ul>
  </div>
{/if}
