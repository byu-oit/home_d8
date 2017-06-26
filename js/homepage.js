/**
 * Created by katrialh on 6/9/2017.
 */

jQuery(function () {
    jQuery('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});

// $( window ).scroll(function() {
// if($( window ).scrollTop() > 10){  // scroll down abit and get the action
jQuery(".progress-bar").each(function(){
    each_bar_width = jQuery(this).attr('aria-valuenow');
    jQuery(this).width(each_bar_width + '%');
});