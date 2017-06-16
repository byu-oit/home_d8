/**
 * Created by katrialh on 6/9/2017.
 */

$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});

// $( window ).scroll(function() {
// if($( window ).scrollTop() > 10){  // scroll down abit and get the action
$(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});