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
})

function scrollTo(hash) {
    location.hash = "#" + hash;
}
