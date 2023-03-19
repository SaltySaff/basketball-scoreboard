// score counts and score elements

const score = {
    'home': 0,
    'guest': 0
}

const scoreEl = {
    'home': document.getElementById("home-score"),
    'guest': document.getElementById("guest-score")
}

// event listeners

document.addEventListener('click', function(e) {
    if (e.target.classList.contains("score-btn")) {
        handleScoreBtn(e.target.dataset.score, e.target.dataset.side)
        highlightLead()
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
    scoreEl[side].textContent = score[side] += amount
}

function resetScore(side) {
    score[side] = 0
    scoreEl[side].textContent = 0
    highlightLead()
}

function highlightLead() {
    const winningSide = score.home > score.guest ? 'home' : 'guest'
    const losingSide = winningSide === 'home' ? 'guest' : 'home'
    scoreEl[winningSide].style.color = "lawngreen"
    scoreEl[losingSide].style.color = "#F94F6D"
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