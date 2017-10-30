/**
 * Created by katria on 9/1/2017.
 */

jQuery(document).ready(function() {

  var trigger=false;
  function randomTrigger(top) {
// Random number 0 - top inclusive
    var randNum = Math.floor(Math.random() * top);
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
  randomTrigger(5);
    if(trigger) {
        if (localStorage.getItem('popState') != 'shown') {
            $("#byu-modal").delay(1000).fadeIn();
            $("#byu-modal").delay(1000).css('display', 'block');
            localStorage.setItem('popState', 'shown')
        }

        $('.byu-close').click(function (e) // You are clicking the close button
        {
            $('#byu-modal').fadeOut(); // Now the pop up is hiden.
        });
        $('#byu-modal').click(function (e) {
            $('#byu-modal').fadeOut();
        }).children().click(function (e) {
            e.stopPropagation();
        });

    }
});
