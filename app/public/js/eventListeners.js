$(document).ready( () => {
  $("#nav-text").mouseover(() => {
    let arrow = $("<img id='down-arrow' src='../images/down.png'>");
    $("#nav-text").html(arrow);
    $("#nav-text").mouseleave(() => {
      $("#nav-text").html();
      $("#nav-text").text("the stuff to know is down below");
    })
  })
  $("#nav-link").click(e => {
    e.preventDefault();
    scrollTo("#nav-link");
  })

  let mockHeight = $("#coin-mock").height();
  $(".col-lg-7").height(mockHeight + 25);
  let newHeight = $(".col-lg-7").height();

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
