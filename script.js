// Rock Paper Scissors Lizard Spock

// initalise variables, constants for altered text content
let currentRound = 0
let playerPoints = 0
let computerPoints = 0

const roundMarker = document.getElementById("roundMarker");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

// set up computer's game participation
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}
let computerChoice = getComputerchoice(1, 5);

function getComputerSelection() {
    if (computerChoice == 1) {
        return "rock"
    } else if (computerChoice == 2) {
        return "paper"
    } else if (computerChoice == 3) {
        return "scissors"
    } else if (computerChoice == 4) {
        return "lizard"
    } else if (computerChoice == 5) {
        return "spock"
    } else {
        return "forfeit"
    }
};

let computerSelection = getComputerSelection("rock" | "paper" | "scissors" | "lizard" | "spock");