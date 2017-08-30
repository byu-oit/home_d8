(function($){
    $(document).ready(function() {
        $('.field-collection-item--name-field-promo-link').each(function() {
            var $this = $(this);
            var href = $this.find('a').attr('href');
            var wrapper = $('<a>').attr('href', href);
            $this.wrap(wrapper);
        });
    });
})(jQuery);