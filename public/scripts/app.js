
$(document).ready(function(){

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

function createTweetElement (tweet) {
  var $tweet = $("<article class='tweet'>")
    .append(createHeader(tweet))
    .append(createTweetBody(tweet))
    .append(createFooter(tweet));
  return $tweet;
}

function renderTweets (tweets){
  tweets.forEach(function(tweetObj){
    var tweet = createTweetElement(tweetObj);
    $("#tweets-container").append(tweet);
  });
}

});



