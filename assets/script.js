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
$("#save1").click(function() {
    var taskCall = $("#text1").val();
        localStorage.setItem('text1', taskCall);
        alert(localStorage.getItem('text1'));
});

$("#save2").click(function() {
    var taskCall = $("#text2").val();
        localStorage.setItem('text2', taskCall);
        alert(localStorage.getItem('text2'));
});

$("#save3").click(function() {
    var taskCall = $("#text3").val();
        localStorage.setItem('text3', taskCall);
        alert(localStorage.getItem('text3'));
});    
 
$("#save4").click(function() {
    var taskCall = $("#text4").val();
        localStorage.setItem('text4', taskCall);
        alert(localStorage.getItem('text4'));
}); 
 
$("#save5").click(function() {
    var taskCall = $("#text5").val();
        localStorage.setItem('text5', taskCall);
        alert(localStorage.getItem('text5'));
}); 
 
$("#save6").click(function() {
    var taskCall = $("#text6").val();
        localStorage.setItem('text6', taskCall);
        alert(localStorage.getItem('text6'));
}); 
 
$("#save7").click(function() {
    var taskCall = $("#text7").val();
        localStorage.setItem('text7', taskCall);
        alert(localStorage.getItem('text7'));
}); 
 
$("#save8").click(function() {
    var taskCall = $("#text8").val();
        localStorage.setItem('text8', taskCall);
        alert(localStorage.getItem('text8'));
}); 
 
$("#save9").click(function() {
    var taskCall = $("#text9").val();
        localStorage.setItem('text9', taskCall);
        alert(localStorage.getItem('text9'));
}); 
   var loadText = function() {
    $("#text1").val(localStorage.getItem('text1'))
    $("#text2").val(localStorage.getItem('text2'))
    $("#text3").val(localStorage.getItem('text3'))
    $("#text4").val(localStorage.getItem('text4'))
    $("#text5").val(localStorage.getItem('text5'))
    $("#text6").val(localStorage.getItem('text6'))
    $("#text7").val(localStorage.getItem('text7'))
    $("#text8").val(localStorage.getItem('text8'))
    $("#text9").val(localStorage.getItem('text9'))
}
  
//  var id = $(this).parent().attr('id');
    // var content = $(taskCell).value(); 
        


    // var text = $(id, "textarea").text();
    //     localStorage.setItem('text', text);
    //     alert(localStorage.getItem('text'));
    //     console.log(content);
               
// });


loadText();
colorCheck();
centralClock();


// document.ready end
});
