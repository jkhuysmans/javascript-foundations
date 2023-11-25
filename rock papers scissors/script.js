console.log("Hello world")

//Pseudocode:
//SET getComputerChoice to randomly return 'Rock', 'Paper' or 'Scissors'
//SET playerSelection and computerSelection to play single round
//SET function to make it 5 rounds

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice= "";
    
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock")) {
        return "You lose!"
    } else if ((playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors")) {
        return "You win!"
    } else {
        return "Its a tie!"
    }
}

    let playerSelection = prompt("Please choose between Rock, Paper and Scissors")
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
       
    
