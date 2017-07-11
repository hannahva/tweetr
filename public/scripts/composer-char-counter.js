$(document).ready(function(){
  $(".new-tweet textarea").on("keyup", function(){
    var input = $(this).val();
    var remaining = 140 - input.length;
    var counter = $(this).closest("form").find(".counter");
    counter.text(remaining);
    if (remaining < 115) {
      counter.addClass("error");
    } else {
      counter.removeClass("error");
    }
  });
});
