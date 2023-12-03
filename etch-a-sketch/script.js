let container = document.querySelector(".squareContainer");


for (let i = 1; i < 16 * 16; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");

    container.appendChild(squareDiv)
} 