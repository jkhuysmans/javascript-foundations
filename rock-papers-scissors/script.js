
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
    fiveRounds()
    
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
    displayScore()
}

// Show choice

let paragraph = document.createElement("p");

 function display(playerSelection, computerSelection, result) {
    
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
    playRound(playerSelection, computerSelection); // Play a round

    if (playerPoints === targetPoints || computerPoints === targetPoints) {
        totalWinner(); // Check for the total winner
    }
}


let showWinner = document.querySelector(".end");
let winnerText = document.createElement("p")

const modalOverlay = document.getElementById("modalOverlay");
    const endModal = document.getElementById("endModal");

  function totalWinner() {

   if (playerPoints > computerPoints) {
    winnerText.textContent = `You win at ${playerPoints} to ${computerPoints}!`;
   } else if (computerPoints > playerPoints) {
    winnerText.textContent = `You lose at ${playerPoints} to ${computerPoints}!`;
   }

   if (!showWinner.contains(winnerText)) {
    showWinner.appendChild(winnerText);
  }
   
  let replayButton = document.querySelector(".replay-button");

   if (!replayButton) {
    replayButton = document.createElement("button");
    replayButton.textContent = "Play again";
    replayButton.classList.add("replay-button");
    showWinner.appendChild(replayButton);
    replayButton.addEventListener("click", replay)
  }

    if (!modalOverlay.style.display || modalOverlay.style.display === "none") {
        modalOverlay.style.display = "flex"; // Show the modal overlay
    }
};

    let playerScore = document.querySelector("#playerScore")
    let computerScore = document.querySelector("#computerScore")

function replay(winnerText, replayButton) {
    computerPoints = 0;
    playerPoints = 0; 
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
    paragraph.textContent = "";

    let elementsInEndClass = document.querySelectorAll('.end > *');
    
    elementsInEndClass.forEach(element => {
        element.remove();
    });

    modalOverlay.style.display = "none";
}


function displayScore() {
    
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
} 

