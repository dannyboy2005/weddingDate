// // var attendees = 1;
// const starterGuest2 = document.getElementById("starter-guest-2");

// function toggle() {
//   // attendees = document.getElementById("attendees").value;
//   if (this.value === 2) {
//     starterGuest2.classList.toggle("display-none");
//   }
// }

$("#attendees").on("change", function() {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;
  if (valueSelected == 2) {
    $("#starter-guest-2").show();
    $("#main-guest-2").show();
    $("#sides-guest-2").show();

    $("#starter-guest-3").hide();
    $("#main-guest-3").hide();
    $("#sides-guest-3").hide();

    $("#starter-guest-4").hide();
    $("#main-guest-4").hide();
    $("#sides-guest-4").hide();
  } else if (valueSelected == 3) {
    $("#starter-guest-2").show();
    $("#main-guest-2").show();
    $("#sides-guest-2").show();

    $("#starter-guest-3").show();
    $("#main-guest-3").show();
    $("#sides-guest-3").show();

    $("#starter-guest-4").hide();
    $("#main-guest-4").hide();
    $("#sides-guest-4").hide();
  } else if (valueSelected == 4) {
    $("#starter-guest-2").show();
    $("#main-guest-2").show();
    $("#sides-guest-2").show();

    $("#starter-guest-3").show();
    $("#main-guest-3").show();
    $("#sides-guest-3").show();

    $("#starter-guest-4").show();
    $("#main-guest-4").show();
    $("#sides-guest-4").show();
  } else {
    $("#starter-guest-2").hide();
    $("#main-guest-2").hide();
    $("#sides-guest-2").hide();

    $("#starter-guest-3").hide();
    $("#main-guest-3").hide();
    $("#sides-guest-3").hide();

    $("#starter-guest-4").hide();
    $("#main-guest-4").hide();
    $("#sides-guest-4").hide();
  }
});
