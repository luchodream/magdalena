(function ($) {
  // Add the custom select date to checkout form
  Drupal.behaviors.magdalenaCheckout = {
    attach: function ( context, settings ) {      
      $('[name="customer_profile_billing[field_fecha][und][0][value][date]"]', context).once('magdalenaCheckout', function(){
      	$(this).datepicker({
      		dateFormat: 'dd/mm/yy',
      		maxDate: '+2w',
      		minDate: '+2d',
			beforeShowDay: function(date) {
				var comuna 		= $('[name="customer_profile_billing[field_comuna][und]"]').val();
				var allowedDays = [];
				if(typeof Drupal.settings.allowed_days[comuna] !== 'undefined'){
					allowedDays = Drupal.settings.allowed_days[comuna];
				}
				//console.log(allowedDays);
				if($.inArray(date.getDay().toString(), allowedDays) > -1){
					return [true, 'allowed-day', Drupal.t('Día permitido')];
				}else{
					return [false, 'not-allowed-day', Drupal.t('Día no permitido')];
				}							
	        },      		
      	});
      })

      $('[name="customer_profile_billing[field_comuna][und]"]', context).once('magdalenaCheckout', function(){
      	$(this).change(function(){
      		$('[name="customer_profile_billing[field_fecha][und][0][value][date]"]').val('');
      	});
      })      
    }
  }
})(jQuery)