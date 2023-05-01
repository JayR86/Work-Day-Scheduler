// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should

  $(".saveBtn").on("click", function () {
    const hour = $(this).parent().attr("id").split("-")[1];
    const text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text);
    $("#messagecontainer").html(`Appointment added to <span>Local Storage</span> <i class="fa fa-check"></i>`);
    setTimeout(() => {
      $("#messagecontainer").html("");
    }, 2500);
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  
  const currentHour = dayjs().hour();
    $(".time-block").each(function () {
      const hour = parseInt($(this).attr("id").split("-")[1]);
      $(this).removeClass("past present future");
      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set

  $(".time-block").each(function () {
    const hour = parseInt($(this).attr("id").split("-")[1]);
    const savedText = localStorage.getItem(hour);
    if (savedText) {
      $(this).find(".description").val(savedText);
    }
  });



  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
