// Show additional guest meals
let invitees;
const attenders = document
  .getElementById("attendees")
  .addEventListener("change", function() {
    invitees = this.value;
  });
const guests = document
  .getElementById("attendees")
  .addEventListener("change", checkAttendees(invitees));

function checkAttendees(n) {
  if (n.value === 1) {
  } else if (n.value === 2) {
    document.getElementById("starter-guest-2").classList.toggle("display-none");
  } else if (n.value === 3) {
  } else {
  }
}

// document.getElementById("attendees").addEventListener("change", function()

// if (this.value === 2) {
//   document
//     .getElementById("starter-guest-2")
//     .classList.remove("display-none");
// }

// if (guests === 2) {
//   const element = document.getElementById("starter-guest-2");
//   element.classList.toggle("display-none");
