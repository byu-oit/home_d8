/**
 * Created by katria on 9/1/2017.
 */

jQuery(document).ready(function() {
  var trigger=false;
  function randomTrigger(top) {
// Random number 0 - top inclusive
    var randNum = Math.floor(Math.random() * top);
    console.log(randNum);
    switch (randNum) {
      case 0:
        trigger=true;
        break;
      default:
        trigger=false;
    }
  }
    if (typeof(Storage) == 'undefined') {
        return;
    }
  randomTrigger(3);
    if(trigger) {
        if (localStorage.getItem('popState') != 'shown') {
            jQuery("#byu-modal").delay(1000).fadeIn();
            jQuery("#byu-modal").delay(1000).css('display', 'block');
            localStorage.setItem('popState', 'shown')
        }

        jQuery('.byu-close').click(function (e) // You are clicking the close button
        {
            jQuery('#byu-modal').fadeOut(); // Now the pop up is hiden.
        });
        jQuery('#byu-modal').click(function (e) {
            jQuery('#byu-modal').fadeOut();
        }).children().click(function (e) {
            e.stopPropagation();
        });

    }
});
