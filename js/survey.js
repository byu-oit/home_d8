/**
 * Created by katria on 9/1/2017.
 */

$(document).ready(function() {
    if (typeof(Storage) == 'undefined') {
        return;
    }
    if(localStorage.getItem('popState') != 'shown'){
        $("#byu-modal").delay(1000).fadeIn();
        $("#byu-modal").delay(1000).css('display','block');
        localStorage.setItem('popState','shown')
    }

    $('.byu-close').click(function(e) // You are clicking the close button
    {
        $('#byu-modal').fadeOut(); // Now the pop up is hiden.
    });
    $('#byu-modal').click(function(e)
    {
        $('#byu-modal').fadeOut();
    }).children().click(function(e) { e.stopPropagation(); });


//        // Get the modal
//        var modal = document.getElementById('byu-modal');
//
//        // Get the button that opens the modal
//        var btn = document.getElementById("byu-button");
//
//        // Get the <span> element that closes the modal
//        var span = document.getElementsByClassName("byu-close")[0];
//
//        // When the user clicks the button, open the modal
//        btn.onclick = function() {
//            modal.style.display = "block";
//        }
//        // When the user clicks on <span> (x), close the modal
//        span.onclick = function() {
//            modal.style.display = "none";
//        }
//        // When the user clicks anywhere outside of the modal, close it
//        window.onclick = function(event) {
//            if (event.target == modal) {
//                modal.style.display = "none";
//            }
//        }
});
