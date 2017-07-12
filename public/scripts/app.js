
$(document).ready(function(){

//Header, TweetBody, Footer create sections of info
//to append in createTweetElement function
function createHeader (tweet) {
  var $header = $("<header>")
      .append($("<img class='avatar' src='" + tweet.user.avatars.small + "'>"))
      .append($("<h3>").text(tweet.user.name))
      .append($("<h4>").text(tweet.user.handle));
  return $header;
}

function createTweetBody (tweet){
  var $tweetBody = $("<p>").text(tweet.content.text);
  return $tweetBody;
}

function createFooter (tweet){
  var $footer = $("<footer>")
      .append($("<h5>").text(tweet.created_at))
      .append($("<span class='icons'>")
        .append($("<img class='save' src='/images/save.png'>"))
        .append($("<img class='retweet' src='/images/retweet.png'>"))
        .append($("<img class='like' src='/images/like.png'>")));
  return $footer;
}

//appends html to #tweets-container with given tweet object info
function createTweetElement (tweet) {
  var $tweet = $("<article class='tweet'>")
    .append(createHeader(tweet))
    .append(createTweetBody(tweet))
    .append(createFooter(tweet));
  return $tweet;
}

//takes in array of objects, calls createTweetElement on each of
//them, rendering them to the page
function renderTweets (tweets){
  $("#tweets-container").empty();
  tweets.forEach(function(tweetObj){
    var tweet = createTweetElement(tweetObj);
    $("#tweets-container").prepend(tweet);
  });
}


//prevents redirect, accesses form text and
//adds to JSON object array at /tweets
//if tweet empty or over-length, won't do ajax request
//once ajax done, clears text field, returns placeholder
//and loads && renders the tweet
function handleNewTweet (event){
    event.preventDefault();
    const $form = $(this);
    const $formText = $form.find("textarea").val();
    if(validateTweet($formText)){
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: $form.serialize()
    })
      .done($form[0].reset())
      .done(loadTweets);
    };
}

const $form = $('#create-tweet');
$form.on('submit', handleNewTweet)


function loadTweets (tweets){
  $.ajax('/tweets')
    .done(renderTweets);
};

loadTweets();


//makes sure tweet is not empty or over-length
function validateTweet (tweetText){
  if(!tweetText){
    alert("Your tweet is empty!")
    return false;
  } else if(tweetText.length > 140){
    alert("A bit long winded this time!")
    return false;
  } else {
    return true;
  }
}


});



