(function($){


// scrolling for several pages:
//Cache reference to window and animation items
// add the class 'animation-element' if you want this script to mark if it is on the page being viewed or not
var $animation_elements = $('.animation-element');
var $window = $(window);

$(document).ready(function() {

    // Chrome 1+
    isChrome = !!window.chrome && !!window.chrome.webstore;
    // console.log('ischrome');
    // console.log(isChrome);
    if(isChrome == false) {
        $('html').addClass('not-chrome');
    }


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

    //Let components finish loading before triggering initial check_if_in_view
    var initialCheckInViewCount = 0;
    function initialCheckInView() {
        if (initialCheckInViewCount++ > 20) {
            //fallback if components aren't loading
            return $window.trigger('scroll');
        }
        var foundLoadingString = false;
        if (window.byu && window.byu.webCommunityComponents && window.byu.webCommunityComponents.resourceLoading) {
            var loading = window.byu.webCommunityComponents.resourceLoading;
            for (var i in loading) {
                if (loading[i] instanceof HTMLScriptElement) {
                    continue;
                }
                foundLoadingString = true;
                if (loading[i] !== 'done') {
                    return setTimeout(initialCheckInView, 100);
                }
            }
        }
        if (!foundLoadingString) {
            return setTimeout(initialCheckInView, 100);
        }
        //Don't just "check_if_in_view"; trigger scroll event so
        //other items watching for scroll will see check_if_in_view results
        $window.trigger('scroll');
    }
    setTimeout(initialCheckInView, 1);
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
