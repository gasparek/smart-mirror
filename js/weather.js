var NEWLINE = "<br>";3
/**
 *
 *   Get the current weather and update DOM
 *
 */
 function getCurrentWeather() {
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=5140405&APPID=4b181e465a763378b13dc651fd4a4375", function(json) {
		var degreesK = json.main.temp;
		var degreesF = Math.round((degreesK * 1.8 - 459.67) * 10) / 10;
		var icon = json.weather[0].icon;
		var iconPath = "http://openweathermap.org/img/w/" + icon + ".png";
		// TODO: day/night weather icon support

		var stringTopLeft = "";
		stringTopLeft += "<div id='weatherspacing'></div>";
		stringTopLeft += "<h5 class='weather'>" + json.name + " </h5>" + NEWLINE;
		stringTopLeft += "<h2 class='weather'>" + degreesF + "&deg;F" + " </h2>" + NEWLINE + NEWLINE;
		stringTopLeft += "<h3 class='weather'>" + getWeatherConditionString(json.weather[0].description) + " </h3>" + NEWLINE; 
		// stringTopLeft += "<h3 class='weather'>" + getWeatherIcon(json.description) + " </h3>";
		stringTopLeft += "<i class='wi " + getWeatherIcon(json.weather[0].description) + "'></i>"; 

		document.getElementById("top-left").innerHTML = stringTopLeft;

		//document.write(JSON.stringify(json));
	});
}

/**
 *	Look up table for weather icons
 *
 */
 function getWeatherIcon(desc) {
 	if(desc == "clear sky")
 		return "wi-day-sunny";
 	if(desc == "few clouds")
 		return "wi-day-cloudy";
 	if(desc == "scattered clouds")
 		return "wi-cloud";
 	if(desc == "broken clouds")
 		return "wi-cloudy";
 	if(desc == "shower rain")
 		return "wi-showers";
 	if(desc == "thunderstorm")
 		return "wi-thunderstorm";
 	if(desc == "snow")
 		return "wi-snow";
 	if(desc == "mist")
 		return "wi-fog";
 	return "INVALID WEATHER ICON LOOKUP";
 }

 /**
  *	Look up table for weather conditions
  *
  */
 function getWeatherConditionString(desc) {
 	if(desc == "clear sky")
 		return "Clear skies";
 	if(desc == "few clouds")
 		return "Mostly clear skies";
 	if(desc == "scattered clouds")
 		return "Scattered clouds";
 	if(desc == "broken clouds")
 		return "Cloudy";
 	if(desc == "shower rain")
 		return "Rainy";
 	if(desc == "thunderstorm")
 		return "Thunderstoms";
 	if(desc == "snow")
 		return "Snowy";
 	if(desc == "mist")
 		return "Mist";
 	return "INVALID WEATHER CONDITION LOOKUP";
 }


