$(document).ready(function() {

  var getMax = function(){
    return $(document).height() - $(window).height();
  }

  var getValue = function(){
    return $(window).scrollTop();
  }

  if ('max' in document.createElement('progress')) {
    var progressBar = $('progress');
    progressBar.attr({ max: getMax() });
    $(document).on('scroll', function(){
      progressBar.attr({ value: getValue() });
    });
    $(window).resize(function(){
      progressBar.attr({ max: getMax(), value: getValue() });
    });

  } else {
    var progressBar = $('.progress-bar'),
        max = getMax(),
        value, width;
    var getWidth = function() {
      value = getValue();
      width = (value/max) * 100;
      width = width + '%';
      return width;
    }
    var setWidth = function(){
      progressBar.css({ width: getWidth() });
    }
    $(document).on('scroll', setWidth);
    $(window).on('resize', function(){
      max = getMax();
      setWidth();
    });
  }

  var projects = $("#projects").offset().top;
  var education = $("#education").offset().top;
  var experience = $("#experience").offset().top;

  $(document).scroll( () => {
    if (getValue() > 197) {
      $("#resume-label, #resume-container").addClass('hide')
      $("div.nav-icons").addClass('flex-direction')
    }
    if (getValue() > projects - 40) {
      $("div.progress-links a.projects-link").addClass('bold')
    }
    if (getValue() > education - 40) {
      $("div.progress-links a.education-link").addClass('bold')
    }
    if (getValue() > education + 40) {
      $("div.progress-links a.experience-link").addClass('bold')
    }
    if (getValue() < 197.5) {
      $("div.progress-links a").removeClass('bold')
      $("div.nav-icons").removeClass('flex-direction')
      $("#resume-label, #resume-container").removeClass('hide')
    }
  })
});
