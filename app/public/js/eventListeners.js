$(document).ready( () => {
  $("#nav-link").click(e => {
    e.preventDefault();
    scrollTo("#nav-link");
  })

  let mockHeight = $("#coin-mock").height();
  $(".col-lg-7").height(mockHeight + 25);
  let newHeight = $(".col-lg-7").height();

  let windowHeight = $(window).height();
  let topSection = $("#top-section");
  let navHeight = $("nav.navbar.navbar-default").height();
  topSection.height(windowHeight - navHeight);

  let iconHeight = $("img.icon-block").height();

  $(window).resize(() => {
    let mockHeight = $("#coin-mock").height();
    $(".col-lg-7").height(mockHeight + 25);
    let newHeight = $(".col-lg-7").height();

    let windowHeight = $(window).height();
    let topSection = $("#top-section");
    let navHeight = $("nav.navbar.navbar-default").height();
    topSection.height(windowHeight - navHeight);
  });

  $(".flip-to-back").click(e => {
    e.preventDefault();
    $("#card").addClass("flipped");
  })

  $(".flip-to-back2").click(e => {
    e.preventDefault();
    $("#card2").addClass("flipped");
  })

  $(".flip-to-back3").click(e => {
    e.preventDefault();
    $("#card3").addClass("flipped");
  })

  $(".flip-to-back4").click(e => {
    e.preventDefault();
    $("#card4").addClass("flipped");
  })

  $(".flip-to-front").click(e => {
    e.preventDefault();
    $("#card").removeClass("flipped");
  })

  $(".flip-to-front2").click(e => {
    e.preventDefault();
    $("#card2").removeClass("flipped");
  })

  $(".flip-to-front3").click(e => {
    e.preventDefault();
    $("#card3").removeClass("flipped");
  })

  $(".flip-to-front4").click(e => {
    e.preventDefault();
    $("#card4").removeClass("flipped");
  })

})

function scrollTo(hash) {
  location.hash = "#" + hash;
}
