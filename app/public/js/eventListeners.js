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
    $("#card2").addClass("flipped");
    $("#card3").addClass("flipped");
    $("#card4").addClass("flipped");
  })
  $(".flip-to-front").click(e => {
    e.preventDefault();
    $("#card").removeClass("flipped");
    $("#card2").removeClass("flipped");
    $("#card3").removeClass("flipped");
    $("#card4").removeClass("flipped");
  })
})

function scrollTo(hash) {
    location.hash = "#" + hash;
}
