(function($){
    $(document).ready(function() {
        $('.field-collection-item--name-field-somethings').each(function() {
            var $this = $(this);
            var href = $this.find('a').attr('href');
            var wrapper = $('<a>').attr('href', href);
            $this.wrap(wrapper);
        });

        var $somethings = $('.field--name-field-somethings');
        $somethings.find('> .field__item').css('opacity', 0);
        var $window = $(window);
        $window.scroll(slideSomethingsIn);
        $window.on('width_resize', function() {
            $somethings.find('> .come-in').removeClass('come-in');
            window.setTimeout(slideSomethingsIn, 0);
        });
        slideSomethingsIn();

        function slideSomethingsIn() {
            $somethings.find('> .in-view').not('.come-in').addClass('come-in');
        };
    });
})(jQuery);