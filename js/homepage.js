(function($){
    // add safari only class
    // Chrome 1+
    isChrome = !!window.chrome && !!window.chrome.webstore;
    if(isChrome == false) {
        $('html').addClass('not-chrome');
    }
    

// scrolling for several pages:
//Cache reference to window and animation items
// add the class 'animation-element' if you want this script to mark if it is on the page being viewed or not
var $animation_elements = $('.animation-element');
var $window = $(window);

$(document).ready(function() {
    $window.on('scroll resize', check_if_in_view);
    //Add special event if *width* changes, since mobile height
    //can change on scroll as toolbars appear/disappear
    var lastWidth = $window.width();
    $window.resize(function() {
        var curWidth = $window.width();
        if (curWidth === lastWidth) {
            return;
        }
        lastWidth = curWidth;
        $window.trigger('width_resize');
    });
    //delay scroll trigger so other "$(document).ready" functions can finish first
    window.setTimeout(function() {$window.trigger('scroll');}, 1);
});

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}
})(jQuery);


// from byu-theme-components documentation:
function d8Search(value) {
   // console.log('trying to click search');
    jQuery('[data-drupal-selector="edit-submit"]').click();
}
