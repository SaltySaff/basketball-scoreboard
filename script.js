// Define the initial scores for each team
let homeScore = 0;
let guestScore = 0;

// Get references to the score elements for each team
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

// Add event listeners for score and reset buttons
document.addEventListener('click', handleButtonClick);

// Function to handle click events on score and reset buttons
function handleButtonClick(e) {
  if (e.target.classList.contains("score-btn")) {
    const score = parseInt(e.target.dataset.score);
    const side = e.target.dataset.side;
    updateScore(score, side);
    highlightLeadingTeam();
  }
  else if (e.target.classList.contains("reset-btn")) {
    const side = e.target.dataset.side;
    resetScore(side);
  }
}

// Function to update the score for a team
function updateScore(score, side) {
  if (side === 'home') {
    homeScore += score;
    homeScoreEl.textContent = homeScore;
  } else if (side === 'guest') {
    guestScore += score;
    guestScoreEl.textContent = guestScore;
  }
}

// Function to reset the score for a team
function resetScore(side) {
  if (side === 'home') {
    homeScore = 0;
    homeScoreEl.textContent = 0;
  } else if (side === 'guest') {
    guestScore = 0;
    guestScoreEl.textContent = 0;
  }
  highlightLeadingTeam();
}

// Function to highlight the leading team based on their score
function highlightLeadingTeam() {
  if (homeScore > guestScore) {
    homeScoreEl.style.color = "lawngreen";
    guestScoreEl.style.color = "#F94F6D";
  } else if (guestScore > homeScore) {
    homeScoreEl.style.color = "#F94F6D";
    guestScoreEl.style.color = "lawngreen";
  } else {
    homeScoreEl.style.color = "#F94F6D";
    guestScoreEl.style.color = "#F94F6D";
  }
}