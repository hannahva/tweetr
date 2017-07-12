$(document).ready(function(){
  $(".new-tweet textarea").on("keyup", function(){
    var $input = $(this).val();
    var remaining = 140 - $input.length;
    var $counter = $(this).closest("form").find(".counter");
    $counter.text(remaining);
    if (remaining < 0) {
      $counter.addClass("error");
    } else {
      $counter.removeClass("error");
    }
  });
  const $form = $('#create-tweet');
  $form.on('submit', function(event){
    $(".counter").text("140");
  })
});
