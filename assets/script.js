$(document).ready(function() {

// Header Clock
var centralClock = function () {
    var currentTime = (moment().format('MMMM Do YYYY'));
    $("#currentDay").html(currentTime);
    console.log(centralClock);
};

// Change Color Based On Time
var colorCheck = function() {
   var currentHour = moment().hours(); 

    $(".row").each( function() {
        var taskHour = this.id;
            if (taskHour == currentHour) {
                $(`#${taskHour} > textarea`).addClass("bg-danger font-weight-bold");
            }
            else if (taskHour < currentHour) {
                $(`#${taskHour} > textarea`).addClass("bg-secondary text-light")
            }
            else {
                $(`#${taskHour} > textarea`).addClass("bg-success")
            }
    });
};

// Save Textarea
var saveTask = function() {
    console.log(text);
    
};


$(".saveCell").click(function() {
    var id = $(this).parent().attr('id');
    console.log(id)
});
    




colorCheck();
centralClock();
// document.ready end
});
