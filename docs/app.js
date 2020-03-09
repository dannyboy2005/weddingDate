// Show additional guest meals
const attendee = document.getElementById("attendees").value;

if (attendee === 2) {
  const element = document.getElementById("starter-guest-2");
  element.classList.toggle("display-none");
}
