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

    let playerSelection = prompt("Please choose between Rock, Paper and Scissors")
    playerSelection = playerSelection.toLowerCase()
    console.log(playerSelection)
    let computerSelection = getComputerChoice()
    console.log(computerSelection) 
       
    function round() {
        
    }
