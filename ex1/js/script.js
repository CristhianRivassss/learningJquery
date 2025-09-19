$(function () {
  // Fade out element over 2000ms
  $(".red-box").fadeOut(2000);

  // Fade back in over 1000ms
  $(".red-box").fadeIn(1000);


  $(".blue-box").delay(1000).fadeTo(1000, 0.5);
  $(".green-box").delay(2000).fadeTo( 0,0.3);
  // Fade element to specific opacity (here 50%)
/*   $(".blue-box").fadeTo(1000, 0.5);
  $(".red-box").fadeTo(2000, 0.7777);
  // Note that the blue box animation starts right away, whereas the second
  // red box animation waits until the first animation finished.
  // This is because each element has its own animation queue which is
  // executed one after the other. So while the red box is still "busy" with
  // its first animation, the second animation waits in the queue.

  // Fade element in or out, depending on current status
$(".blue-box").slideUp(1000);
$(".blue-box").slideDown(1000);
$(".blue-box").fadeToggle(); */
  // Notice that fadeToggle fades back to the blue box's previous opacity,
  // thus only back to 50% opacity.


  $(".blue-box").animate({
    "margin-left": "+=100px",
    "opacity": 0.5,
    "height": "+=50px",
    "width": "+=40px",
  }, 1000);
  $("h1").animate({
    "fontSize": "40px",
    "margin-left": "100px"
  }, 1000);

  $("p:first").css("background", "yellow").fadeOut(2000).fadeIn(2000);
  $("input[type='text']").css("background", "yellow").fadeOut(2000).fadeIn(2000);
  $("li:odd").css("background", "yellow").fadeOut(2000).fadeIn(2000);
  $("#list").parents("div").css("background", "red").fadeOut(2000).fadeIn(2000);
  $("#content").css("background", "orange")
  $("#list").parent().prev().css("background", "pink").fadeOut(2000).fadeIn(2000);

});
