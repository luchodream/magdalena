<div class="phone">
	<div class="number"><?php print variable_get('magdalena_phone_number', '600 545 1000'); ?></div>
<div class="movil">
	<div class="number"><?php print variable_get('magdalena_movil_number', '027735735'); ?></div>
	<small><?php print t('desde celulares') ?></small>
</div>
<div class="mail">
	<?php print l(variable_get('magdalena_email', 'info@granjamagdalena.com'), 'mailto:' . variable_get('magdalena_email', 'info@granjamagdalena.com'), array('absolute' => TRUE)); ?>	
</div>
<div class="social clearfix">
	<div class="text"><?php print t('Seguinos en') ?></div>
	<div class="facebook"><?php print l(t('facebook'), variable_get('magdalena_facebook', 'http://www.facebook.com'), array('attributes' => array('target' => '_blank'))); ?></div>
	<div class="twitter"><?php print l(t('twitter'), variable_get('magdalena_twitter', 'http://www.twitter.com'), array('attributes' => array('target' => '_blank'))); ?></div>
</div>