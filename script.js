// Rock Paper Scissors Lizard Spock

// initalise variables, constants for altered text content
let currentRound = 0
let playerPoints = 0
let computerPoints = 0

const roundMarker = document.getElementById("roundMarker");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const logs = document.getElementById("logs");
const outcome = document.getElementById("outcome");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const lizardBtn = document.getElementById("lizard");
const spockBtn = document.getElementById("spock");

// set up computer's game participation
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}
let computerChoice = getComputerChoice(1, 5);

function getComputerSelection(computerChoice) {
    if (computerChoice == 1) {
        return "rock"
    } 
    else if (computerChoice == 2) {
        return "paper"
    } 
    else if (computerChoice == 3) {
        return "scissors"
    } 
    else if (computerChoice == 4) {
        return "lizard"
    } 
    else if (computerChoice == 5) {
        return "spock"
    } 
    else {
        return "forfeit"
    }
};

let computerSelection = getComputerSelection("rock" | "paper" | "scissors" | "lizard" | "spock");

// text displays for game log
function playerChoice(logEntry) {
    const entry = document.createElement("p");
    entry.classList.add("entry");
    entry.textContent = logEntry;
    logs.appendChild(entry);
};

// restart button
const restart = document.querySelector("#restart");
restart.onclick = () => history.go(0);

// event listener for gameplay using UI
rockBtn.addEventListener("click", () => {
    playerSelection = "rock"
    var logEntry = "You chose rock."
    playerChoice(logEntry);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection(computerChoice);
    playRound(computerSelection, playerSelection);
});
paperBtn.addEventListener("click", () => {
    playerSelection = "paper"
    var logEntry = "You chose paper."
    playerChoice(logEntry);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection(computerChoice);
    playRound(computerSelection, playerSelection);
});
scissorsBtn.addEventListener("click", () => {
    playerSelection = "scissors"
    var logEntry = "You chose scissors."
    playerChoice(logEntry);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection(computerChoice);
    playRound(computerSelection, playerSelection);
});
lizardBtn.addEventListener("click", () => {
    playerSelection = "lizard"
    var logEntry = "You chose lizard."
    playerChoice(logEntry);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection(computerChoice);
    playRound(computerSelection, playerSelection);
});
spockBtn.addEventListener("click", () => {
    playerSelection = "spock"
    var logEntry = "You chose spock."
    playerChoice(logEntry);
    computerChoice = getComputerChoice(1, 5);
    computerSelection = getComputerSelection(computerChoice);
    playRound(computerSelection, playerSelection);
});

function gameStatus(result) {
    const roundResult = document.createElement("p");
    roundResult.classList.add("result");
    roundResult.textContent = result;
    logs.appendChild(roundResult);
}

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
        var result = "You Lose! Scissors cuts paper."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        var result = "You Win! Scissors cuts paper."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        var result = "You Lose! Paper covers rock."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        var result = "You Win! Paper covers rock."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "rock" && playerSelection == "lizard") {
        var result = "You Lose! Rock smashes lizard."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "lizard" && playerSelection == "rock") {
        var result = "You Win! Rock smashes lizard."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "lizard" && playerSelection == "spock") {
        var result = "You Lose! Lizard poisons Spock."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "spock" && playerSelection == "lizard") {
        var result = "You Win! Lizard poisons Spock."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "spock" && playerSelection == "scissors") {
        var result = "You Lose! Spock breaks scissors."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "scissors" && playerSelection == "spock") {
        var result = "You Win! Spock breaks scissors."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "scissors" && playerSelection == "lizard") {
        var result = "You Lose! Scissors decapitates lizard."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "lizard" && playerSelection == "scissors") {
        var result = "You Win! Scissors decapitates lizard."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "lizard" && playerSelection == "paper") {
        var result = "You Lose! Lizard eats paper."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "paper" && playerSelection == "lizard") {
        var result = "You Win! Lizard eats paper."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "paper" && playerSelection == "spock") {
        var result = "You Lose! Paper disproves Spock."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "spock" && playerSelection == "paper") {
        var result = "You Win! Paper disproves Spock."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "spock" && playerSelection == "rock") {
        var result = "You Lose! Spock vaporizes rock."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "rock" && playerSelection == "spock") {
        var result = "You Win! Spock vaporizes rock."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        var result = "You Lose! Rock crushes scissors."
        gameStatus(result);
        currentRound += 1;
        computerPoints += 1;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        var result = "You Win! Rock crushes scissors."
        gameStatus(result);
        currentRound += 1;
        playerPoints += 1;
    } else {
        var result = "It's a Tie!"
        gameStatus(result);
        currentRound += 1;
    }

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

    // text display for outcome
    if (playerPoints == 5) {
        var gameOutcome = "You WIN the game! Click the restart button to play again."
        endgame(gameOutcome);
    } else if (computerPoints == 5) {
        var gameOutcome = "You LOSE the game. Click the restart button to try again."
        endgame(gameOutcome);
    } else {
        var gameOutcome = " "
    }
};

// text displays for game log
function endgame(gameOutcome) {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    main.remove();
    const endgameMsg = document.createElement("div");
    endgameMsg.textContent = gameOutcome;
    body.appendChild(endgameMsg);
};