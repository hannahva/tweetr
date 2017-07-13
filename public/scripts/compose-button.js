//event listener on compose button
//on click, .new-tweet section will toggle up or down
//and focus on the form's textarea

$(() => {
  const $button = $("button");
  $("section.new-tweet").hide();
  $button.on("click", () => {
    $("section.new-tweet").slideToggle(() => {
      $(".new-tweet textarea").focus()
    });
  });
});