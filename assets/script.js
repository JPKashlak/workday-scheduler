$(document).ready(function() {

// Header Clock
var centralClock = function () {
    var currentTime = (moment().format('MMMM Do YYYY'));
    $("#currentDay").html(currentTime);
    console.log(centralClock);
};






$(".taskCell").on("click", function() {
    
    $(".taskCell p").html("<textarea>");

     // var text = $(this).text().trim();

    // var textInput = ("<textarea>").val(text);
    //     $(this).replaceWith(textInput);  
});
   








var timeCheck = function() {

        if (moment().diff())
        $(".taskCell").addClass("bg-danger");
};
 










centralClock();
// document.ready end
});
