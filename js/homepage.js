(function($){


// scrolling for several pages:
//Cache reference to window and animation items
// add the class 'animation-element' if you want this script to mark if it is on the page being viewed or not
var $animation_elements = $('.animation-element');
var $window = $(window);
$window.trigger('scroll');
$window.on('scroll resize', check_if_in_view);

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



/* ----- About page -------- */

    $(function () {
        $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    });

// scroll effects
    $( window ).scroll(function() {
//about yfacts

        if( $('.yfacts-about').hasClass('in-view')) {
            //add  if large screen
            // $('.larger-p').css('animation', 'type 4s steps(50, end)');
            $('.larger-p')
                .delay(600)
                .queue(function (next) {
                    $(this).css('animation', 'type 4s steps(50, end)');
                    $(this).css('display', 'block');
                    next();
                });
            // $('.larger-p2').css('animation', 'type2 2s steps(60, end)');
            $('.larger-p2')
                .delay(1800)
                .queue(function (next) {
                    $(this).css('display', 'block');
                    $(this).css('animation', 'type 4s steps(40, end)');
                    next();
                });
        }
    });

// students stats

$( window ).scroll(function() {
    if($('.students-group').hasClass('in-view')) {
        $(".students-group .progress-bar").each(function(){
            each_bar_width = $(this).attr('students-now');
            total = $(this).attr('students-max');
            percent =  each_bar_width / total *100 ;
            $(this).width(percent + '%');
            showStudentNumbers();
        });

    }
});
// gender

$( window ).scroll(function() {
    if($('.field--name-field-gender').hasClass('in-view')) {  // scroll down abit and get the action
        $(".field--name-field-gender .progress-bar").each(function(){
            each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
            showGenderLabels();
        });
    }
});

// Demographics & Map area

    // State & Countries
    $( window ).scroll(function() {
        if($('.demographics1').hasClass('in-view')) {  // scroll down abit and get the action
            $(".demographics1").fadein();
        }
    });
    // state percentages


    // languages navy circles


    // bottom stats


    // % students speaking

    $( window ).scroll(function() {
        if($('.demographics4').hasClass('in-view')) {  // scroll down abit and get the action

           // show certifications first

           // then students speaking %
            $(".field--name-field-students-speaking .progress-bar").each(function(){
                each_bar_width = $(this).attr('aria-valuenow');
                $(this).width(each_bar_width); // already has % included
            });
        }
    });

    // end of About page, on scroll events

// several functions for about page:

    function showStudentNumbers() {
        $('.students-group .progress-bar.bar1 .tooltip-inner')
            .delay(1500)
            .queue(function (next) {
                $(this).css('color', '#002e5d');
                next();
            });
        $('.students-group .progress-bar.bar2 .tooltip-inner')
            .delay(1500)
            .queue(function (next) {
                $(this).css('color', '#767676');
                next();
            });
    }

    function showGenderLabels() {
        $('.field--name-field-gender .progressText')
            .delay(1500)
            .queue(function (next) {
                $(this).css('display', 'block');
                next();
            });

    }



// demographics



})(jQuery);