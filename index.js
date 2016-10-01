var hoursLeft = 58/60; // this is a fraction of hours.
var momentAtWhichhoursLeftWasCreated = Date.now();
var currentSpeedMph = 5;
var milesGoal = 4;
var initialMilesTravelled = 0.1;

function hoursThatHavePassed() {
  return (Date.now()-momentAtWhichhoursLeftWasCreated)/(3600*1000);
}

function milesTravelled() {
  return initialMilesTravelled + hoursThatHavePassed()*currentSpeedMph;
}

function requiredSpeedMph() {
  var milesLeft = milesGoal - milesTravelled();
  return milesLeft/hoursLeft;
}

function updateScreen() {
    setTimeout(updateScreen, 1000);
    var requiredSpeedElement = document.getElementById("RequiredSpeed");
    requiredSpeedElement.innerText = requiredSpeedMph();
//    document.write(requiredSpeedMph()); // don't ever use document.write.  it doesn't let us do what we need.  All it does is add.  It doesn't replace things.
    // document.write("<br>");
}
setTimeout(updateScreen, 60);
