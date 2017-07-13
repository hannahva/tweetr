//event listener on compose button
//on click, .new-tweet section will toggle up or down
//and focus on the form's textarea

$(document).ready(function(){
  var $button = $("button");
  $("section.new-tweet").hide();
  $button.on("click", function(){
    $("section.new-tweet").slideToggle(function(){
      $(".new-tweet textarea").focus()
    });
  });
});