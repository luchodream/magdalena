<div class="phone">
	<div class="number"><a href="tel:<?php print variable_get('magdalena_phone_number', '600 545 1000'); ?>"><?php print variable_get('magdalena_phone_number', '600 545 1000'); ?></a></div>
</div>
<div class="movil">
	<div class="number"><a href="tel:<?php print variable_get('magdalena_phone_number', '027735735'); ?>"><?php print variable_get('magdalena_movil_number', '027735735'); ?></a></div>
	<small><?php print t('desde celulares') ?></small>
</div>
<div class="mail">
	<?php print l(variable_get('magdalena_email', 'info@granjamagdalena.com'), 'mailto:' . variable_get('magdalena_email', 'info@granjamagdalena.com'), array('absolute' => TRUE)); ?>	
</div>
<div class="social clearfix">
	<div class="text"><?php print t('Síguenos en') ?></div>
	<div class="facebook"><?php print l(t('facebook'), variable_get('magdalena_facebook', 'http://www.facebook.com'), array('attributes' => array('target' => '_blank'))); ?></div>
	<div class="twitter"><?php print l(t('twitter'), variable_get('magdalena_twitter', 'http://www.twitter.com'), array('attributes' => array('target' => '_blank'))); ?></div>
</div>