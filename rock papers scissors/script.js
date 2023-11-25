console.log("Hello world")

//Pseudocode:
//SET getComputerChoice to randomly return 'Rock', 'Paper' or 'Scissors'
//Use a random number between 1 and 3 to define getComputerChoice
//SET playerSelection and computerSelection to set playRound
//SET fiveRounds function to make it 5 rounds

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

    function fiveRounds() {
        const totalRounds = 5;
        for (let i = 1; i <= totalRounds; i++) {
            let playerSelection = prompt("Please choose between Rock, Paper and Scissors")
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = getComputerChoice()
            console.log(playRound(playerSelection, computerSelection))
        }
     }

     fiveRounds()

     // console.log(playRound(playerSelection, computerSelection))
       
    
