(function($){
    $(document).ready(function() {
        $('.field--name-field-somethings > .field__item').click(function(evt) {
            evt.stopPropagation();
            window.location.href = $(this).find('a').attr('href');
        });

        var $somethings = $('.field--name-field-somethings');
        $somethings.find('> .field__item').css('opacity', 0);
        var $window = $(window);
        var lastWidth = $window.width();
        $window.scroll(slideSomethingsIn);
        $window.resize(function() {
            var curWidth = $window.width();
            if (curWidth === lastWidth) {
                return;
            }

            lastWidth = curWidth;
            $somethings.find('> .come-in').removeClass('come-in');
            window.setTimeout(slideSomethingsIn, 0);
        });
        slideSomethingsIn();

        function slideSomethingsIn() {
            $somethings.find('> .in-view').not('.come-in').addClass('come-in');
        };
    });
})(jQuery);