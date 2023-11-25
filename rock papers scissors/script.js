
//Pseudocode:
//SET getComputerChoice to randomly return 'Rock', 'Paper' or 'Scissors'
//Use a random number between 1 and 3 to define getComputerChoice
//SET playerSelection and computerSelection to set playRound
//SET fiveRounds function to make it 5 rounds
//SET Winner function for total score

let playerPoints = 0;
let computerPoints = 0;

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
        
        computerPoints++
        return "You lose!";
    } else if ((playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors")) {
        playerPoints++
        return "You win!";
    } else {
        return "Its a tie!";
    }
}

    function fiveRounds() {
        const totalRounds = 5;
        for (let i = 1; i <= totalRounds; i++) {
            let playerSelection = prompt("Please choose between Rock, Paper and Scissors");
            playerSelection = playerSelection.toLowerCase();
            let computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        if (totalRounds === 5) {
            console.log(Winner(playerPoints,computerPoints));
        }
     }

     function Winner() {
        if (playerPoints < computerPoints) {
            return(`You lost at ${playerPoints} to ${computerPoints}`);
        } else if (playerPoints === computerPoints) {
            return("Players are even");
        } else if (playerPoints > computerPoints) {
            return(`You win at ${playerPoints} to ${computerPoints}`);
        }
     }

     fiveRounds()

       
    
