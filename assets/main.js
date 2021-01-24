
// Add timer to the header of our page

var dateHeader = moment().format("[Today is] dddd[,] Do[.] [Your local time is] LT")

$("#currentDay").append(dateHeader)


// This function makes the saveBtn store the text into our local storage

$(".saveBtn").click(function(){
    var taskId = $(this).attr("id")
    var taskItem = $("#" + taskId).val()
    localStorage.setItem(taskId, taskItem)
})

// The getItem bring the value stored in our local storage back to the DOM

$("#8").val(localStorage.getItem("8"))
$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))

/* This function changes the background between past, 
present and future based on the current hour */

function getHourStatus() {

    var currentHour = moment().hour()
    $(".textFill").each(function(){
        var taskId = $(this).attr("id")
        console.log(taskId);
        if (taskId < currentHour) {
        $(this).addClass("past")
        }
        else if (taskId == currentHour)  {
                $(this).removeClass("past")
                $(this).addClass("present") 
            }
            else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
            }
    })
}

getHourStatus()











