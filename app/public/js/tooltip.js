$(document).ready(() => {
  $("li a[title]").tooltip();
  $.fn.tooltip = el => {

    let $tooltip,
      $body = $('body'),
      $el;

    return this.each((i, el) => {

      $el = $(el).attr("data-tooltip", i);

      let $tooltip = $('<div>')
        .addClass('tooltip')
        .data('tooltip', i)
        .text( $el.attr('title'))
        .append('<div class="arrow"></div>')
        .appendTo("body");

      let linkPosition = $el.position();

      $tooltip.css({
        "top": linkPosition.top - $tooltip.outerHeight() - 60,
        "left": linkPosition.left - ($tooltip.width()/2),
      });

      $el
      .removeAttr("title")
      .hover(() => {
        $el = $(this);
        $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']');
        let linkPosition = $el.position();

        $tooltip.css({
          "top": linkPosition.top - $tooltip.outerHeight() - 60,
          "left": linkPosition.left - ($tooltip.width()/2)
        });

        $tooltip.addClass("active");

      }, () => {

        $el = $(this);
        $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']').addClass("out");
        setTimeout(() => {
          $tooltip.removeClass("active").removeClass("out");
          }, 300);
      });
    });
  }
});
