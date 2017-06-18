$(document).ready( () => {
  $("#nav-text").mouseover( () => {
    let arrow = $("<img id='down-arrow' src='../images/down.png'>");
    $("#nav-text").html(arrow);
  })
  $("#nav-text").mouseleave( () => {
    // let message = $("<span></span>");
    $("#nav-text").html();
    $("#nav-text").text("the stuff to know is down below");
  })
})
