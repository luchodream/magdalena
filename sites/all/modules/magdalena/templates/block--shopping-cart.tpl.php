<div class="cart-link">
	<div class="cart-link-inner">
		<?php print l(t('Ver mi carro (!quantity)', array('!quantity' => $quantity)), 'cart'); ?>
	</div>
</div>
<div class="cart-total">
	<div class="cart-total-inner">
		<?php print commerce_currency_format($total['amount'], $total['currency_code']); ?>
	</div>
</div>
<div class="clear-both"></div>