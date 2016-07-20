var newsIterator = 0;


getCurrentWeather();
getCurrentTimeAndDate();
getWorldNewsFeed();

var updateTime = setInterval(function updateTimeAndDate() {
	getCurrentTimeAndDate();
}, 1000); // 1 second

var updateWeather = setInterval(function updateWeather() {
	getCurrentWeather();
}, 1000*60*3); // 3mins

var updateNews = setInterval(function updateNews() {
	clearNewsFeed();
	newsIterator++;
	if(newsIterator == 1) {
		getSportsFeed();
	} 
	else if(newsIterator == 2) {
		getPoliticsFeed();
	}
	else if(newsIterator == 3) {
		getTechnologyFeed();
	} 
	else if(newsIterator == 4) {
		getWorldNewsFeed();
		newsIterator = 1;
	}
}, 1000*7); // 7sec



