/**
 * @file
 * JS for general purpouses of magdalena_theme
 */

window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : Drupal.settings.magdalena.fb_api,     // App ID from the app dashboard
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });
    // Additional initialization code such as adding Event Listeners goes here 
};


/**
 *  Custom misc JS 
 */
(function ($) {
  Drupal.behaviors.magdalena = {
    attach: function ( context, settings ) {
      // Custom login button on checkout 
      $('#views-form-commerce-cart-form-default #edit-login', context).once('magdalena-checkout', function(){
        $(this).click(function(e){
          e.preventDefault();
          window.location = Drupal.settings.basePath + 'user/login?destination=cart';
        });
      });
      // Confirm delete cart item
      $('input.delete-line-item', context).once('magdalena-checkout', function(){
        var product = $(this).parents('tr:first').find('.views-field-line-item-title').html().trim();
        $(this).attr('onClick', 'return confirm("' + Drupal.t('Está seguro que desea eliminar el producto !product?', {'!product' : product}) + '");');
      });  
    }
  }
})(jQuery);


/**
 * Spinner functionality
 */
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

/**
 * Custom functionality on checkout
 */
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
            var comuna    = $('[name="customer_profile_billing[field_comuna][und]"]').val();
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
      });

      $('#views-form-commerce-cart-form-default #edit-login', context).once('magdalena-checkout', function(){
        $(this).click(function(e){
          e.preventDefault();
          window.location = Drupal.settings.basePath + 'user/login?destination=cart';
        });
      });          
    }
  }
})(jQuery)