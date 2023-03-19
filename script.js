const count = {
    'home': 0,
    'guest': 0
}

const score = {
    'home': document.getElementById("home-score"),
    'guest': document.getElementById("guest-score")
}

// event listeners

document.addEventListener('click', function(e) {
    if (e.target.classList.contains("score-btn")) {
        handleScoreBtn(e.target.dataset.score, e.target.dataset.side)  
    } 
    else if (e.target.classList.contains("reset-btn")) {
        handleResetBtn(e.target.dataset.side)
    }
})

// event listener handler functions

function handleScoreBtn(score, side) {
    incrementScore(parseInt(score), side)
}

function handleResetBtn(side) {
    resetScore(side)
}

// scoreboard functions

function incrementScore(amount, side) {
    score[side].textContent = count[side] += amount
}

function resetScore(side) {
    count[side] = 0
    score[side].textContent = 0
}

// function highlightHome() {
//     if (homeCount > guestCount) {
//         homeScore.style.color = "lawngreen"
//     } else {
//         homeScore.style.color = "#F94F6D"
//     }
// }
// function highlightGuest() {
//     if (guestCount > homeCount) {
//         guestScore.style.color = "lawngreen"
//     } else {
//         guestScore.style.color = "#F94F6D"
//     }
// }
// function checkForWinner() {
//     highlightHome()
//     highlightGuest()
// }