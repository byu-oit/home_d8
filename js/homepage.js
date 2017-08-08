(function($){


// scrolling for several pages:
//Cache reference to window and animation items
// add the class 'animation-element' if you want this script to mark if it is on the page being viewed or not
var $animation_elements = $('.animation-element');
var $window = $(window);
$window.trigger('scroll');
$window.on('scroll resize', check_if_in_view);
$(document).ready(check_if_in_view);

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
        $('.counter:not(".done-counting")').each(function() {
            var $this = $(this),
                countTo = $this.attr('content');

            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing:'linear',
                    step: function() {
                        $this.html((Math.floor(this.countNum)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    },
                    complete: function() {
                        $this.html((this.countNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                        //alert('finished');
                    }

                });
            $(this).addClass('done-counting');

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

    $( window ).scroll(function() {
        if($('.demographics1').hasClass('in-view')) {  // scroll down abit and get the action

            console.log('the demo 1 was viewed');
            // focus map
            // $('#about-demographics:before')
            //     .delay(600)
            //     .queue(function (next) {
            //         $(this).css('filter', 'blur(0px)');
            //         next();
            //     });

            // State & Countries
            if (window.matchMedia('(min-width: 1024px)').matches) {
                $('.field--name-field-states')
                    .delay(600)
                    .queue(function (next) {
                        $(this).css('animation', 'type2 500ms steps(2, end)');
                        $(this).css('display', 'block');
                        next();
                    });
                $('.states-label')
                    .delay(1800)
                    .queue(function (next) {
                        $(this).css('display', 'inline');
                        $(this).css('animation', 'type2 1000ms steps(6, end)');
                        next();
                    });
                // should only run for 768px and above:
                $('.and-icon')
                    .delay(2400)
                    .queue(function (next) {
                        $(this).css('display', 'block');
                        $(this).css('animation', '1s fadein');
                        next();
                    });


                $('.field--name-field-countries')
                    .delay(2700)
                    .queue(function (next) {
                        $(this).css('animation', 'type2 500ms steps(2, end)');
                        $(this).css('display', 'block');
                        next();
                    });
                $('.countries-label')
                    .delay(3100)
                    .queue(function (next) {
                        $(this).css('display', 'inline');
                        $(this).css('animation', 'type2 1200ms steps(8, end)');
                        next();
                    });
            }
            // state percentages
            $(".state-percents-group .state-1")
                .delay(3500)
                .queue(function (next) {
                    $(this).css('display', 'inline');
                    $(this).css('animation' , '1s fadein');
                    next();
            });
            $(".state-percents-group .state-2")
                .delay(4000)
                .queue(function (next) {
                    $(this).css('display', 'inline');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $(".state-percents-group .state-3")
                .delay(4500)
                .queue(function (next) {
                    $(this).css('display', 'inline-block');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $(".state-percents-group .state-4")
                .delay(5000)
                .queue(function (next) {
                    $(this).css('display', 'inline');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $(".state-percents-group .state-5")
                .delay(5500)
                .queue(function (next) {
                    $(this).css('display', 'inline');
                    // need arizona to be display:  block for 1023px and down
                    $(this).css('animation' , '1s fadein');
                    next();
                });


            // us map
            $("#dots1")
                .delay(600)
                .queue(function (next) {
                    $(this).css('display', 'block');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $("#dots2")
                .delay(900)
                .queue(function (next) {
                    $(this).css('display', 'block');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $("#dots3")
                .delay(1200)
                .queue(function (next) {
                    $(this).css('display', 'block');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $("#dots4")
                .delay(1500)
                .queue(function (next) {
                    $(this).css('display', 'block');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $("#dots5")
                .delay(1800)
                .queue(function (next) {
                    $(this).css('display', 'block');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $("#dots6")
                .delay(2100)
                .queue(function (next) {
                    $(this).css('display', 'block');
                    $(this).css('animation' , '1s fadein');
                    next();
                });
            $("#dots7")
                .delay(2400)
                .queue(function (next) {
                    $(this).css('display', 'block');
                    $(this).css('animation' , '1s fadein');
                    next();
                });


            // languages navy circles
            if($('.demographics3').hasClass('in-view')) {  // scroll down abit and get the action
                console.log('the demo 3 was viewed');
                // change this to AFTER states stats have appeared
                if (window.matchMedia('(min-width: 1024px)').matches) {
                    $(".vertical-dots.before-languages .gray-dot.dot-1")
                        .delay(6000)
                        .queue(function (next) {
                            $(this).css('display', 'block');
                            $(this).css('animation' , '1s fadein');
                            next();

                    });
                    $(".vertical-dots.before-languages .gray-dot.dot-2")
                        .delay(6200)
                        .queue(function (next) {
                            $(this).css('display', 'block');
                            $(this).css('animation' , '1s fadein');
                            next();

                    });
                    $(".vertical-dots.before-languages .gray-dot.dot-3")
                        .delay(6400)
                        .queue(function (next) {
                            $(this).css('display', 'block');
                            $(this).css('animation' , '1s fadein');
                            next();

                    });
                    $(".languages-taught-circle")
                        .delay(6800)
                        .queue(function (next) {
                            // $(this).css('display', 'flex');
                            $(this).css('visibility', 'visible');
                            $(this).css('animation', '1s fadeinfast');
                            next();

                        });
                    $(".languages-spoken-circle")
                        .delay(7200)
                        .queue(function (next) {
                            // $(this).css('display', 'flex');
                            $(this).css('visibility', 'visible');
                            $(this).css('animation', '1s fadeinfast');
                            next();

                        });
                }

                // if($('.demographics4').hasClass('in-view')) {  // scroll down abit and get the action

                // show certifications first
                $(".certifications-group-wrapper")
                    .delay(7500)
                    .queue(function (next) {
                        $(this).css('display', 'block');
                        $(this).css('animation-name' , 'bounceInRight');
                        // animation-name:bounceInRight
                        next();

                    });

                $(".vertical-dots.after-spoken .gray-dot.dot-1")
                    .delay(8400)
                    .queue(function (next) {
                        $(this).css('display', 'block');
                        $(this).css('animation' , '1s fadein');
                        next();

                    });
                $(".vertical-dots.after-spoken .gray-dot.dot-2")
                    .delay(8600)
                    .queue(function (next) {
                        $(this).css('display', 'block');
                        $(this).css('animation' , '1s fadein');
                        next();

                    });
                $(".vertical-dots.after-spoken .gray-dot.dot-3")
                    .delay(8800)
                    .queue(function (next) {
                        $(this).css('display', 'block');
                        $(this).css('animation' , '1s fadein');
                        next();

                    });

                // then students speaking %

                $(".field--name-field-students-speaking .students-speaking-text-wrapper")
                    .delay(9000)
                    .queue(function (next) {
                        $(this).css('visibility', 'visible');
                        $(this).css('animation' , '1s fadeinfast');
                        next();

                    });
                $(".field--name-field-students-speaking .barWrapper.students-speaking")
                    .delay(9000)
                    .queue(function (next) {
                        $(this).css('display', 'flex');
                        $(this).css('animation' , '1s fadeinfast');
                        next();

                    });
                if (window.matchMedia('(min-width: 1024px)').matches) {
                    $(".field--name-field-students-speaking .progress-bar")
                        .delay(9200)
                        .queue(function (next) {
                            each_bar_width = $(this).attr('aria-valuenow');
                            $(this).width(each_bar_width); // already has % included
                            next();

                        });
                }
                if (window.matchMedia('(max-width: 1023px)').matches) {
                    $(".field--name-field-students-speaking .progress-bar")
                        .delay(7200)
                        .queue(function (next) {
                            each_bar_width = $(this).attr('aria-valuenow');
                            $(this).width(each_bar_width); // already has % included
                            next();

                        });
                }



                // }

            }

            // bottom stats


            // % students speaking

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