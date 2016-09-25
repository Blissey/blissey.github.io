var hoursLeft = 58/60;
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
    document.write(requiredSpeedMph());
    document.write("<br>");
}
setTimeout(updateScreen, 60);
