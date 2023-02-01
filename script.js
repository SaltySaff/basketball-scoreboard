let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0;
let guestCount = 0;


function incrementHome(amount) {
    homeScore.textContent = homeCount += amount
}
function incrementGuest(amount) {
    guestScore.textContent = guestCount += amount
}
function resetHome() {
    homeCount = 0
    homeScore.textContent = 0
}
function resetGuest() {
    guestCount = 0
    guestScore.textContent = 0
}