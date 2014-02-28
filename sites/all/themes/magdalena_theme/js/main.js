

(function ($) {
  // Add a spinner on quantity widget.
  Drupal.behaviors.quantitySpinner = {
    attach: function ( context, settings ) {
      $('.form-item-quantity input, input[name*="edit_quantity"]', context).once('spinner', function(){
      	$(this).spinner({
        	min: 1,
        	max: 9999,
        	increment: 'fast'
      	});
      })
    }
  }
})(jQuery);