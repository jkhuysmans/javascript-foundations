
//Pseudocode:
//SET getComputerChoice to randomly return 'Rock', 'Paper' or 'Scissors'
//Use a random number between 1 and 3 to define getComputerChoice
//SET playerSelection and computerSelection to set playRound
//SET fiveRounds function to make it 5 rounds
//SET Winner function for total score

let playerPoints = 0;
let computerPoints = 0;
let targetPoints = 5;

let selection = "";
let computerChoice= "";
let playerSelection = "";
let computerSelection = "";


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}


// Button selection

const inputRock = document.querySelector("#rock")
const inputPaper = document.querySelector("#paper")
const inputScissors = document.querySelector("#scissors")

inputRock.addEventListener("click", () => {
    playerSelection = "Rock";
    playGame(playerSelection);
});

inputPaper.addEventListener("click", () => {
    playerSelection = "Paper";
    playGame(playerSelection);
});

inputScissors.addEventListener("click", () => {
    playerSelection = "Scissors";
    playGame(playerSelection)
});

function playGame(playerSelection) {
    computerSelection = getComputerChoice(); // Get computer's choice
    playRound(playerSelection, computerSelection); // Call playRound with both choices
    // displayChoice(playerSelection, computerSelection) // Call choices
}

let result = "";

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        
        computerPoints++
        result = "Loss"
        console.log("You lose!");
    } else if ((playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors")) {
        playerPoints++
        result = "Win"
        console.log("You win!");
    } else {
        result = "Tie"
        console.log("It's a tie!");
    }
    display(playerSelection, computerSelection, result)
}

// Show choice

 function display(playerSelection, computerSelection, result) {
    let paragraph = document.createElement("p");
    if (result == "Loss") {
        paragraph.textContent = `You lose! Your ${playerSelection.toLowerCase()}
    is beaten by ${computerSelection.toLowerCase()}!`;

    } else if (result == "Win") {
        paragraph.textContent = `You win! Your ${playerSelection.toLowerCase()}
    beats ${computerSelection.toLowerCase()}!`;

    } else if (result == "Tie") {
        paragraph.textContent = `It's a tie! You both chose ${playerSelection.toLowerCase()}!`

    }

    let choiceHeader = document.querySelector(".choice");
    choiceHeader.appendChild(paragraph);
} 

function fiveRounds() {
    if (playerPoints == targetPoints || computerPoints == targetPoints) {
        totalWinner()
    } else {
        playRound(playerSelection, computerSelection);
    }
}

 function totalWinner() {
    let showWinner = document.querySelector("#scoreNumber")
    let winnerText = document.createElement("p")

   if (playerPoints > computerPoints) {
    winnerText.textContent = `You win at ${playerPoints} to ${computerPoints}!`
    showWinner.appendChild(winnerText)
   } else if (computerPoints > playerPoints) {
    winnerText.textContent = `You lose at ${playerPoints} to ${computerPoints}!`
    showWinner.appendChild(winnerText)
   } 

}

fiveRounds()



function displayScore() {
    let scoreNumber = document.querySelector(".scoreNumber")
    
}

