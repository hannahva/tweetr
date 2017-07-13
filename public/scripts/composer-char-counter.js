//counts number of characters entered into textarea
//and updates counter with characters remaining.
//if over-length, counter turns red. (/styles/new-tweet.css)

$(() => {
  $(".new-tweet textarea").on("keyup", function(){
    const $input = $(this).val();
    const remaining = 140 - $input.length;
    const $counter = $(this).closest("form").find(".counter");
    $counter.text(remaining);
    if (remaining < 0) {
      $counter.addClass("error");
    } else {
      $counter.removeClass("error");
    }
  });
});
