let container = document.querySelector(".squareContainer");

for (let i = 0; i < (16 * 16); i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");

    squareDiv.addEventListener('mouseenter', () => {
        squareDiv.style.backgroundColor = "grey";
    });

    container.appendChild(squareDiv);
}


let track = document.querySelector('.square');

track.addEventListener('mouseenter', () => {
    track.style.backgroundColor = "red";
});
