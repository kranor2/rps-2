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

// Rules
// scissors cuts (>) paper
// paper covers (>) rock
// rock smashes (>) lizard
// lizard poisons (>) spock
// spock breaks (>) scissors
// scissors decapitates (>) lizard
// lizard eats (>) paper
// paper disproves (>) spock
// spock vaporizes (>) rock
// rock crushes (>) scissors

function playRound(computerSelection, playerSelection) {
// gameplay: rounds and standoff outcomes -> text display/update for score and round markers    
    if (computerSelection == "scissors" && playerSelection == "paper") {
        var logMsg = "You Lose! Scissors cuts paper."
        computerPoints += 1;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        var logMsg = "You Win! Scissors cuts paper."
        playerPoints += 1;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        var logMsg = "You Lose! Paper covers rock."
        computerPoints += 1;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        var logMsg = "You Win! Paper covers rock."
        playerPoints += 1;
    } else if (computerSelection == "rock" && playerSelection == "lizard") {
        var logMsg = "You Lose! Rock smashes lizard."
        computerPoints += 1;
    } else if (computerSelection == "lizard" && playerSelection == "rock") {
        var logMsg = "You Win! Rock smashes lizard."
        playerPoints += 1;
    } else if (computerSelection == "lizard" && playerSelection == "spock") {
        var logMsg = "You Lose! Lizard poisons Spock."
        computerPoints += 1;
    } else if (computerSelection == "spock" && playerSelection == "lizard") {
        var logMsg = "You Win! Lizard poisons Spock."
        playerPoints += 1;
    } else if (computerSelection == "spock" && playerSelection == "scissors") {
        var logMsg = "You Lose! Spock breaks scissors."
        computerPoints += 1;
    } else if (computerSelection == "scissors" && playerSelection == "spock") {
        var logMsg = "You Win! Spock breaks scissors."
        playerPoints += 1;
    } else if (computerSelection == "scissors" && playerSelection == "lizard") {
        var logMsg = "You Lose! Scissors decapitates lizard."
        computerPoints += 1;
    } else if (computerSelection == "lizard" && playerSelection == "scissors") {
        var logMsg = "You Win! Scissors decapitates lizard."
        playerPoints += 1;
    } else if (computerSelection == "lizard" && playerSelection == "paper") {
        var logMsg = "You Lose! Lizard eats paper."
        computerPoints += 1;
    } else if (computerSelection == "paper" && playerSelection == "lizard") {
        var logMsg = "You Win! Lizard eats paper."
        playerPoints += 1;
    } else if (computerSelection == "paper" && playerSelection == "spock") {
        var logMsg = "You Lose! Paper disproves Spock."
        computerPoints += 1;
    } else if (computerSelection == "spock" && playerSelection == "paper") {
        var logMsg = "You Win! Paper disproves Spock."
        playerPoints += 1;
    } else if (computerSelection == "spock" && playerSelection == "rock") {
        var logMsg = "You Lose! Spock vaporizes rock."
        computerPoints += 1;
    } else if (computerSelection == "rock" && playerSelection == "spock") {
        var logMsg = "You Win! Spock vaporizes rock."
        playerPoints += 1;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        var logMsg = "You Lose! Rock crushes scissors."
        computerPoints += 1;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        var logMsg = "You Win! Rock crushes scissors."
        playerPoints += 1;
    }

    logPlay(logMsg);
    currentRound += 1;
    // display current round, player & computer scores in stats elements
    roundMarker.innerHTML = `${currentRound}`;
    playerScore.innerHTML = `${playerPoints}`;
    computerScore.innerHTML = `${computerPoints}`;

    // disable buttons once either player reaches 5 points
    // therefore force restart to play again
    if (playerPoints == 5 || computerPoints == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        lizardBtn.disabled = true;
        spockBtn.disabled = true;
    }
}
