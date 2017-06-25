$(document).ready( () => {
  $("#nav-text").mouseover( () => {
    let arrow = $("<img id='down-arrow' src='../images/down.png'>");
    $("#nav-text").html(arrow);
    $("#nav-text").mouseleave( () => {
      // let message = $("<span></span>");
      $("#nav-text").html();
      $("#nav-text").text("the stuff to know is down below");
    })
  })
  $("#nav-link").click( (e) => {
    e.preventDefault();
    scrollTo("#nav-link");
  })
  // $('.ui.labeled.icon.sidebar')
  // .sidebar('toggle');
})

function scrollTo(hash) {
    location.hash = "#" + hash;
}
