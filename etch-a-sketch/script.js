let container = document.querySelector(".squareContainer");
let squareSide = 16;

addSquares();

function getRandomColor() {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 256); 
    const blue = Math.floor(Math.random() * 256); 

    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    return randomColor;
}

function addSquares() { for (let i = 0; i < (squareSide * squareSide); i++) {
    
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.width = `${512 / squareSide}px`;
    squareDiv.style.height = `${512 / squareSide}px`;

    squareDiv.addEventListener('mouseenter', () => {
        squareDiv.style.backgroundColor = `${getRandomColor()}`;
    });

    container.appendChild(squareDiv);
}};

let track = document.querySelector('.square');

let changeButton = document.querySelector(".changebutton")
changeButton.addEventListener("click", changeSquares)

function changeSquares() {
    container.innerHTML = "";

    let squarePrompt = prompt("Insert the number of squares per side you want");

    if (squarePrompt > 100) {
        squarePrompt = prompt("Error: please enter a number under 100.")
    }
    squareSide = parseInt(squarePrompt);
    console.log(squarePrompt)
    
    addSquares(squareSide);
}
