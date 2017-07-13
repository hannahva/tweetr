
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
      .append($("<h5>").text(timeSince(tweet.created_at)))
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
//using .prepend renders them in chronological order
function renderTweets (tweets){
  $("#tweets-container").empty();
  tweets.forEach(function(tweetObj){
    var tweet = createTweetElement(tweetObj);
    $("#tweets-container").prepend(tweet);
  });
}


//prevents redirect, accesses form text and
//adds to JSON object array at /tweets
//if tweet empty or over-length, won't do ajax request.
//once ajax done, clears text field, returns placeholder,
//resets character counter and loads && renders the tweet
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
      .done(loadTweets)
      .done($(".counter").text("140"));
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
//alerts user of either error
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

//takes in created_at in milliseconds and turns it into a readable
//format, telling user how long since it was posted
function timeSince (time) {
  const now = Date.now();
  const elapsed = now - time;
  const diffMinutes = Math.floor((elapsed / 1000) / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours/ 24);
  if (diffDays > 365){
    return "Over a year ago";
  } else if (diffHours > 23){
    if (diffDays === 1){
      return diffDays + " day ago";
    } else {
      return diffDays + " days ago";
    }
  } else if (diffMinutes > 59){
    if (diffHours === 1){
      return diffHours + " hour ago";
    } else {
      return diffHours + " hours ago";
    }
  } else {
    if (diffMinutes < 1) {
      return "Just a moment ago";
    } else if (diffMinutes === 1){
      return diffMinutes + " minute ago";
    } else {
      return diffMinutes + " minutes ago";
    }
  }
}

});



