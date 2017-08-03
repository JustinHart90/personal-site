$(document).ready(() => {
  $("li a[title]").tooltip();
  // Create plugin
  $.fn.tooltips = el => {

    let $tooltip,
      $body = $('body'),
      $el;

    // Ensure chaining works
    return this.each((i, el) => {

      $el = $(el).attr("data-tooltip", i);

      // Make DIV and append to page
      let $tooltip = $('<div class="tooltip" data-tooltip="' + i + '">' + $el.attr('title') + '<div class="arrow"></div></div>').appendTo("body");

      // Position right away, so first appearance is smooth
      let linkPosition = $el.position();

      $tooltip.css({
        top: linkPosition.top - $tooltip.outerHeight() - 13,
        left: linkPosition.left - ($tooltip.width()/2)
      });

      $el
      // Get rid of yellow box popup
      .removeAttr("title")

      // Mouseenter
      .hover(() => {

        $el = $(this);

        $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']');

        // Reposition tooltip, in case of page movement e.g. screen resize
        let linkPosition = $el.position();

        $tooltip.css({
          top: linkPosition.top - $tooltip.outerHeight() - 13,
          left: linkPosition.left - ($tooltip.width()/2)
        });

        // Adding class handles animation through CSS
        $tooltip.addClass("active");

        // Mouseleave
      }, () => {

        $el = $(this);

        // Temporary class for same-direction fadeout
        $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']').addClass("out");

        // Remove all classes
        setTimeout(() => {
          $tooltip.removeClass("active").removeClass("out");
          }, 300);

      });
    });
  }
});
