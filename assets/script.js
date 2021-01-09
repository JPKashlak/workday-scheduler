// Header Clock
var centralClock = function () {
    var currentTime = (moment().format('MMMM Do YYYY, h:mm:ss a'));
    $("#currentDay").html(currentTime);
    setInterval(centralClock, 1000);
}
    $(document).ready(function() {
        centralClock();
});