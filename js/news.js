google.load("feeds", "1");

//var i = 0;

function getWorldNewsFeed() {
  var feed = new google.feeds.Feed("http://feeds.reuters.com/Reuters/worldNews");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("bottom-left");
      container.innerHTML = "<h3>Top Stories: <i>World News</i></h3>";
      for (var i = 0; i < result.feed.entries.length; i++) {
      //for(i = 0; i < 4; i++){
        var entry = result.feed.entries[i];
        //var div = document.createElement("div");
        //div.appendChild(document.createTextNode(entry.title));
        //container.appendChild(div);
        container.innerHTML += "<h4>" + entry.title + "</h4>";
      }
    }
  });
}

function getSportsFeed() {
  var feed = new google.feeds.Feed("http://feeds.reuters.com/reuters/sportsNews");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("bottom-left");
      container.innerHTML = "<h3>Top Stories: <i>Sports</i><h3>";
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        container.innerHTML += "<h4>" + entry.title + "</h4>";
      }
    }
  });
}


function getTechnologyFeed() {
  var feed = new google.feeds.Feed("http://feeds.reuters.com/reuters/technologyNews");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("bottom-left");
      container.innerHTML = "<h3>Top Stories: <i>Technology</i></h3>";
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        container.innerHTML += "<h4>" +entry.title + "</h4>";
      }
    }
  });
}

function getPoliticsFeed() {
  var feed = new google.feeds.Feed("http://feeds.reuters.com/Reuters/PoliticsNews");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("bottom-left");
      container.innerHTML = "<h3>Top Stories: <i>Politics</i></h3>";
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        container.innerHTML += "<h4>" + entry.title + "</h4>";
      }
    }
  });
}

function clearNewsFeed() {
  document.getElementById("bottom-left").innerHTML = "";
}