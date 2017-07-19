(function($){
    $(document).ready(function() {
        $('.field--name-field-promo-link > .field__item').click(function(evt) {
            evt.stopPropagation();
            window.location.href = $(this).find('a').attr('href');
        });
    });
})(jQuery);