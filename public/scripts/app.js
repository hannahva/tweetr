
$(document).ready(function(){

function createTweetElement (tweet) {
  var $tweet = $("<article class='tweet'>")
    .append($("<header>")
      .append($("<img class='avatar' src='" + tweet.user.avatars.small + "'>"))
      .append($("<h3>").text(tweet.user.name))
      .append($("<h4>").text(tweet.user.handle))
    )
    .append($("<p>").text(tweet.content.text))
    .append($("<footer>")
      .append($("<h5>").text(tweet.created_at))
      .append($("<span class='icons'>")
        .append($("<img class='save' src='/images/save.png'>"))
        .append($("<img class='retweet' src='/images/retweet.png'>"))
        .append($("<img class='like' src='/images/like.png'>"))
        )
    );
  return $tweet;
}

function renderTweets (tweets){
  tweets.forEach(function(tweetObj){
    var tweet = createTweetElement(tweetObj);
    $("#tweets-container").append(tweet);
  });
}

});



