(function($){
    $(document).ready(function() {
        $('.field--name-field-somethings > .field__item').click(function(evt) {
            evt.stopPropagation();
            window.location.href = $(this).find('a').attr('href');
        });
    });
})(jQuery);