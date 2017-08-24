(function($){
    $(document).ready(function() {
        $('.promo-link-item.field__item').click(function(evt) {
            evt.stopPropagation();
            window.location.href = $(this).find('a').attr('href');
        });
    });
})(jQuery);