var NEWLINE = "<br>"

/**
 *	Get current time and date and update DOM
 *
 */
function getCurrentTimeAndDate() {
	var now = new Date();

	var day = now.getDay();

	var date = now.getDate();
	var month = now.getMonth();
	var year = now.getFullYear();

	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds(); // TODO: format seconds (turn 6 ->06)
	var ampm = "AM";

	// format data
	day = getFormattedDay(day);
	month = getFormattedMonth(month);
	seconds = getFormattedTimeElement(seconds);
	minutes = getFormattedTimeElement(minutes);

	// convert from military to standard
	if(hours > 12) { 
		ampm = "PM";
		hours = hours - 12;
	}
	
	// build string
	var stringTopRight = "";
	stringTopRight += "<div id='timespacing'></div>"
	stringTopRight += "<h2 class='time'>" + hours + ":" + minutes + " " + ampm + "</h2>" + NEWLINE + NEWLINE + NEWLINE; 
	stringTopRight += "<h3 class='time'>" + day + "</h3>" + NEWLINE + NEWLINE;
	stringTopRight += "<h3 class='time' id='date'>" + month + " " + date + ", " + year + "</h3>";

	document.getElementById("top-right").innerHTML = stringTopRight;
}

/**
 *	Look up table for months
 *
 */
function getFormattedMonth(month) { 
	if(month == 0)
		return "January";
	if(month == 1)
		return "February";
	if(month == 2)
		return "March";
	if(month == 3)
		return "April";
	if(month == 4)
		return "May";
	if(month == 5)
		return "June";
	if(month == 6)
		return "July";
	if(month == 7)
		return "August";
	if(month == 8)
		return "September";
	if(month == 9)
		return "October";
	if(month == 10)
		return "November";
	if(month == 11)
		return "December";
}

/**
 *  Retruns a formatted string for a time element (i.e. 6 becomes 06)
 *
 */
 function getFormattedTimeElement(num) {
 	if(num < 10) {
 		num = "0" + num;
 		return num;
 	}
 	return num;
 }

 /**
  *  Look up table for weekdays
  *
  */
  function getFormattedDay(day) {
  	if(day == 0)
  		return "Sunday"
  	if(day == 1)
  		return "Monday"
  	if(day == 2)
  		return "Tuesday"
  	if(day == 3)
  		return "Wednesday"
  	if(day == 4)
  		return "Thursday"
  	if(day == 5)
  		return "Friday"
  	if(day == 6)
  		return "Saturday"
  }

