(function ($) {
  Drupal.behaviors.gcseAutocomplete = {
    attach: function(context, settings) {
      if (settings.googleCSE == undefined) {
        return;
      }

      $('.google-cse .form-item-keys input.form-search')
        .focus(function () {
          this.select();
        })
        .mouseup(function (e) {
          e.preventDefault();
        })
        .autocomplete({
          position: {
            my: "left top",
            at: "left bottom",
            offset: "0, 5",
            collision: "none"
          },
          source: function (request, response) {
            $.ajax({
              url: "//clients1.google.com/complete/search?q=" + request.term + "&hl=en&client=partner&source=gcsc&partnerid=" + settings.googleCSE.cx + "&ds=cse&nocache=" + Math.random().toString(),
              dataType: "jsonp",
              success: function (data) {
                response($.map(data[1], function (item) {
                  if (item.length > 1) {
                    return {
                      full: item[2]
                    };
                  }
                  return {
                    label: item[0]
                  };
                }));
              }
            });
          },
          autoFill: true,
          minChars: 0,
          select: function (event, ui) {
            if (ui.item.full) {
                window.location.href = ui.item.full.b;
                return;
            }
            $(this).closest('input').val(ui.item.value);
            $(this).closest('form').trigger('submit');
          }
        })
        .autocomplete( "instance" )._renderItem = function( ul, item ) {
            if (item.full) {
                return $("<li>").append("<div class='autocomplete-full-link'>" + item.full.a + "<div class='autocomplete-link-description'>" + item.full.d + "</div></div>").appendTo(ul);
            }
            return $( "<li>" )
                .append(item.label)
                .appendTo( ul );
        };
    }
  };
}(jQuery));