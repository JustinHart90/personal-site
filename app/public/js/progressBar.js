$(document).ready(function() {

  var getMax = function(){
    return $(document).height() - $(window).height();
  }

  var getValue = function(){
    return $(window).scrollTop();
  }

  if ('max' in document.createElement('progress')) {
    // Browser supports progress element
    var progressBar = $('progress');

    // Set the Max attr for the first time
    progressBar.attr({ max: getMax() });

    $(document).on('scroll', function(){
      // On scroll only Value attr needs to be calculated
      progressBar.attr({ value: getValue() });
    });

    $(window).resize(function(){
      // On resize, both Max/Value attr needs to be calculated
      progressBar.attr({ max: getMax(), value: getValue() });
    });

  } else {

    var progressBar = $('.progress-bar'),
        max = getMax(),
        value, width;

    var getWidth = function() {
      // Calculate width in percentage
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
      // Need to reset the Max attr
      max = getMax();
      setWidth();
    });
  }

  var projects = $("#projects").offset().top;
  var education = $("#education").offset().top;
  var experience = $("#experience").offset().top;


  // flex-direction for icon block
  $(document).scroll( () => {
    // console.log("Get Max:", getMax());
    console.log("Get Value:", getValue());
    // getValue() !== 0 ?
    //   $("div.nav-icons").addClass('flex-direction') :
    //   $("div.nav-icons").removeClass('flex-direction')

    if (getValue() > 195) {
      $("#resume-label, #resume-container").addClass('hide')
      $("div.nav-icons").addClass('flex-direction')
    }

    if (getValue() !== 0) {
      // $("progress").addClass('showBorder');
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
    if (getValue() === 0) {
      $("div.progress-links a").removeClass('bold')
      $("div.nav-icons").removeClass('flex-direction')
      // $("#resume-label, #resume-container").removeClass('hide')
    }
  })
});


// $(document).ready( () => {
//   var winHeight = $(window).height(),
//       docHeight = $(document).height(),
//       progressBar = $('progress'),
//       max, value;
//
//   /* Set the max scrollable area */
//   max = docHeight - winHeight;
//   progressBar.attr('max', max);
//
//   $(document).on('scroll', () => {
//      value = $(window).scrollTop();
//      progressBar.attr('value', value);
//   });
//
//   $(window).on('resize', () => {
//     winHeight = $(window).height(),
//     docHeight = $(document).height();
//
//     max = docHeight - winHeight;
//     progressBar.attr('max', max);
//
//     value =  $(window).scrollTop();
//     progressBar.attr('value', value);
//   });
// });
