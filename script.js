let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".btn");
const roundInfo = document.querySelector(".round-info");
const winnerDisplay = document.querySelector(".winner");

function getUser(e) {
    let choice = e.target.textContent;
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}

function getComputer() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(userChoice) {
    const computerChoice = getComputer();

    if (userChoice === computerChoice) {
        roundInfo.textContent = `Tie! Both chose ${userChoice}`;
    }
    else if ((userChoice === "Rock" && computerChoice === "Scissors") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Scissors" && computerChoice === "Paper")) {
        playerScore++;
        roundInfo.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. You win this round!`;
    } else {
        computerScore++;
        roundInfo.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. Computer wins this round!`;
    }

    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".computer-score").textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        winnerDisplay.textContent = playerScore === 5 ? "You won the game!" : "Computer won the game!";
        buttons.forEach(btn => btn.disabled = true);
    }
}

buttons.forEach(btn => btn.addEventListener("click", e => {
    const userChoice = getUser(e);
    playRound(userChoice);
}));
