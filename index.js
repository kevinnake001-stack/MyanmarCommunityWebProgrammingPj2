// Mouse Move Event
$(document).mousemove(function () {
  $("body").css("background-color", "#f8f9fa");
});

// Focus Event
$("#cname, #cemail, #cmsg").focus(function () {
  $(this).css("border-color", "blue");
});

// Keypress Event
$("#cname").keypress(function () {
  $("#coutput").text("Typing...");
});

// Change Event
$("#cemail").change(function () {
  $("#coutput").text("Email updated");
});

// Click Event
$("#contactBtn").click(function (e) {
  e.preventDefault();
  $("#coutput").text("Message sent successfully!");
});
