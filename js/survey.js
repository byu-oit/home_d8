/**
 * Created by katria on 9/1/2017.
 */

$(document).ready(function() {
    function randomTrigger() {
// Random number 0 - 2 inclusive
        var randNum = Math.floor(Math.random() * 3)
        switch (randNum) {
            case 0:
                $trigger=TRUE;
                break;
            default:
                $trigger=FALSE;
        }
    }
    if (typeof(Storage) == 'undefined') {
        return;
    }
    if($trigger) {
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
