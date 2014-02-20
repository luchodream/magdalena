<?php
/**
 * @file
 * Template for a two column layout.
 *
 */
?>
<div class="panel-display panel-2col-sidebar-right clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
	<div class="panel-top">
		<div class="panel-top-inner panel-inner">
			<?php print $content['top']; ?>
		</div>            
	</div>
	<div class="panel-middle">
		<div class="panel-col-first">
			<div class="panel-col-first-inner panel-inner">
				<?php print $content['main']; ?>
			</div>
		</div>
		<div class="panel-col-last">
			<div class="inside">
				<?php print $content['sidebar']; ?>				
			</div>
		</div>
		<div class="clear-both"></div>
	</div>
	<div class="panel-bottom">		
		<div class="panel-bottom-inner panel-inner">
			<?php print $content['bottom']; ?>
		</div>
	</div>
</div>