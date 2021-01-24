
var dateHeader = moment().format("[Today is] dddd[,] MM[.] [Your local time is] LT")

$("#currentDay").append(dateHeader)



$(".saveBtn").click(function(){

    var taskId = $(this).attr("id")
    // var text = $("textFill" + taskId).val()
    var taskItem = $("#" + taskId).val()
    // console.log(taskId);
    // console.log(taskItem)
    localStorage.setItem(taskId, taskItem)
    // debugger
})


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











