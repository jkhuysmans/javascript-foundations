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
    computerSelection = getComputerChoice(); 
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
    displayRound(playerSelection, computerSelection, result)
    displayScore()
}


let roundResult = document.createElement("p");

 function displayRound(playerSelection, computerSelection, result) {
    
    if (result == "Loss") {
        roundResult.textContent = `You lose! Your ${playerSelection.toLowerCase()}
    is beaten by ${computerSelection.toLowerCase()}!`;

    } else if (result == "Win") {
        roundResult.textContent = `You win! Your ${playerSelection.toLowerCase()}
    beats ${computerSelection.toLowerCase()}!`;

    } else if (result == "Tie") {
        roundResult.textContent = `It's a tie! You both chose ${playerSelection.toLowerCase()}!`

    }

    let choiceHeader = document.querySelector(".choice");
    choiceHeader.appendChild(roundResult);
} 

function fiveRounds() {
    playRound(playerSelection, computerSelection); 

    if (playerPoints === targetPoints || computerPoints === targetPoints) {
        totalWinner(); 
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
        modalOverlay.style.display = "flex";
    }
};

    let playerScore = document.querySelector("#playerScore")
    let computerScore = document.querySelector("#computerScore")

function replay(winnerText, replayButton) {
    computerPoints = 0;
    playerPoints = 0; 
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
    roundResult.textContent = "";

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

