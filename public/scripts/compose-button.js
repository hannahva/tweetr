$(document).ready(function(){

  var $button = $("button");
  $("section.new-tweet").hide();
  $button.on("click", function(event){
    $("section.new-tweet").slideToggle(function(){
      $(".new-tweet textarea").focus()
    });
  });


});

//event listener on compose button 'click'
//on click, .new-tweet section will toggle up or down
