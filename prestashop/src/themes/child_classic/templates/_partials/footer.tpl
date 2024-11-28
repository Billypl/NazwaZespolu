{**
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
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 *}
<div class="container">
  <div class="row">
    {block name='hook_footer_before'}
      {hook h='displayFooterBefore'}
    {/block}
  </div>
</div>
<div class="footer-container">
  <div class="container">
    <div class="row">
      {block name='hook_footer'}
        {hook h='displayFooter'}
      {/block}
    </div>
    <div class="row">
      {block name='hook_footer_after'}
        {hook h='displayFooterAfter'}
      {/block}
    </div>
    <div class="row">
      <div class="col-md-12">
      <div id="price_info" class="footer_settings__price_info price_info mb-4 d-md-flex align-items-md-center mb-md-0"><div class="price_info__wrapper"><span class="price_info__text --type">
										W sklepie prezentujemy ceny brutto (z VAT).<hr>                  <img class="idosell__img mx-auto d-block b-lazy b-loaded" src="/img/certificates.svg?v=1" alt="Sklepy internetowe IdoSell">
									</span></div></div>
        <div class="contact_footer_list">
        <ul><li class="contact_type_header"><a href="https://www.pasart.pl/pl/contact" title="">
          </a></li><li class="contact_type_phone"><a href="tel:785732738">785732738</a></li><li class="contact_type_mail"><a href="mailto:sklep@pasart.pl">sklep@pasart.pl</a></li><li class="contact_type_adress"><span class="shopshortname">pasart<span>, </span></span><span>Lubliniecka 32b<span>, </span></span><span>42-288<span> Strzebiń</span></span></li></ul>
        </div>
        <p class="text-sm-center low_footer">
          ♡ Sklep przyjazny rękodzielnikom ♡ Darmowa dostawa od 199zł ♡ Wysyłka w 24h ♡14 dni na zwrot ♡ Zniżki do -90%
        </p>
      </div>
    </div>
  </div>
</div>
