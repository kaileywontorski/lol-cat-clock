var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var timeEventJS = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
var time = new Date().getHours();
var isPartyTime = document.getElementById("isPartyTime");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function()
{

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/3/8/2/enhanced-buzz-23352-1331192576-19.jpg?downsize=715:*&output-format=auto&output-quality=auto";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
	image = "http://kittentoob.com/wp-content/uploads/2013/06/Cats_Waking_Up_1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://userscontent2.emaze.com/images/194450fa-f75d-4c9e-906c-7c1e6086ac6e/6a22cbbd-a2a1-4092-bc23-5b8a01dd7705.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Good evening!";
} else {
	image = "http://2.bp.blogspot.com/-2qEyE1WBKdw/UWVulyzCurI/AAAAAAAAhlg/u5XEI0eSl9U/s1600/funny-cat-pictures-045-029.jpg";
    messageText = "Good afternoon!";
}
timeEventJS.innerText = messageText;
lolcat.src = image;
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// the rest of the LOLCat code you wrote up until this step

showCurrentTime();

};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// make isPartyTime button work
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "PARTY TIME!";
	  partyTimeButton.style.backgroundColor = "#222";
} else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "Party Over";
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};
	partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function()
{
	napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
