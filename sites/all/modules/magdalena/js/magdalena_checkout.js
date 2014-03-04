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
            // Get holidays
            var isHoliday     = false;
            var holidayTitle  = '';
            $.each(Drupal.settings.holidays, function(key, value){
              //console.log(value);
              if(date.getDate().toString() == value.day && date.getMonth().toString() == value.month - 1){
                isHoliday     = true;
                holidayTitle  = Drupal.t(value.title); 
                return false;                         
              }                 
            });
            if(isHoliday){
              return [false, 'not-allowed-day', holidayTitle];
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