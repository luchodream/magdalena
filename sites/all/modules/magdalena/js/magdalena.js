/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
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