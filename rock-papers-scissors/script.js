
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


// Show choice

/* function displayChoice() {
    let userParagraph = document.createElement("p")
    let choiceHeader = document.querySelector(".choice")
    userParagraph.textContent = `You have chosen %{userChoice}`
    choiceHeader.appendChild(userChoice);
}
       
displayChoice() */

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
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        
        computerPoints++
        //return "You lose!"
        console.log("You lose!");
    } else if ((playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors")) {
        //playerPoints++
        //return "You win!";
        console.log("You win!");
    } else {
        //return "Its a tie!";
        console.log("It's a tie!");
    }
}

 


