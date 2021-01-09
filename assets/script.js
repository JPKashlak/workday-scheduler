$(document).ready(function() {

// Header Clock
var centralClock = function () {
    var currentTime = (moment().format('MMMM Do YYYY'));
    $("#currentDay").html(currentTime);
    console.log(centralClock);
};

var colorCheck = function() {
   var currentHour = moment().hours(); 

    $(".row").each( function() {
        var taskHour = this.id;
            if (taskHour == currentHour) {
                $(`#${taskHour} > textarea`).addClass("bg-danger");
            }
            else if (taskHour < currentHour) {
                $(`#${taskHour} > textarea`).addClass("bg-secondary")
            }
            else {
                $(`#${taskHour} > textarea`).addClass("bg-success")
            }
    });
};
   

colorCheck();
centralClock();
// document.ready end
});
