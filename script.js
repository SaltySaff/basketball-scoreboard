let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0;
let guestCount = 0;

function incrementHome(amount) {
    homeScore.textContent = homeCount += amount
    checkForWinner()
}
function incrementGuest(amount) {
    guestScore.textContent = guestCount += amount
    checkForWinner()
}
function resetHome() {
    homeCount = 0
    homeScore.textContent = 0
    checkForWinner()
}
function resetGuest() {
    guestCount = 0
    guestScore.textContent = 0
    checkForWinner()
}
function highlightHome() {
    if (homeCount > guestCount) {
        homeScore.style.color = "lawngreen"
    } else {
        homeScore.style.color = "#F94F6D"
    }
}
function highlightGuest() {
    if (guestCount > homeCount) {
        guestScore.style.color = "lawngreen"
    } else {
        guestScore.style.color = "#F94F6D"
    }
}
function checkForWinner() {
    highlightHome()
    highlightGuest()
}