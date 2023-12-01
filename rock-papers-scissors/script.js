
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
    
let selection = ""
let playerSelection = ""

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
    const computerSelection = getComputerChoice(); // Get computer's choice
    playRound(playerSelection, computerSelection); // Call playRound with both choices
    // displayChoice(playerSelection, computerSelection) // Call choices
}

let result = "";

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        
        // computerPoints++
        displayLoss(playerSelection, computerSelection);
        console.log("You lose!");
    } else if ((playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors")) {
        //playerPoints++
        displayWin(playerSelection, computerSelection);
        console.log("You win!");
    } else {
        displayTie(playerSelection, computerSelection);
        console.log("It's a tie!");
    }
    display()
}

// Show choice


function displayLoss(playerSelection, computerSelection) {
    let paragraph = document.createElement("p");
    paragraph.textContent = `You lose! Your ${playerSelection.toLowerCase()}
    is beaten by ${computerSelection.toLowerCase()}!`

    let choiceHeader = document.querySelector(".choice");
    choiceHeader.appendChild(paragraph);
}

function displayWin(playerSelection, computerSelection) {
    let paragraph = document.createElement("p");
    paragraph.textContent = `You win! Your ${playerSelection.toLowerCase()}
    beats ${computerSelection.toLowerCase()}!`

    let choiceHeader = document.querySelector(".choice");
    choiceHeader.appendChild(paragraph);
}

function displayTie(playerSelection, computerSelection) {
    let paragraph = document.createElement("p");
    paragraph.textContent = `It's a tie! You both chose ${playerSelection.toLowerCase()}!`

    let choiceHeader = document.querySelector(".choice");
    choiceHeader.appendChild(paragraph);
}

 

