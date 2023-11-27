const container = document.querySelector("#container");

const redParagraph = document.createElement("p") // Adds a new div
redParagraph.classList.add("red") // Adds a class to the div
redParagraph.textContent = "Hey I'm red!" // Add text content

container.appendChild(redParagraph)

const red = document.querySelector(".red") // must be after both the paragraph and the class were added to work
red.style.cssText = "color: red"; 

// add <h3> with blue text that says "i'm a blue <h3>"

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue H3!";
blueH3.style.cssText = "color: blue";

container.appendChild(blueH3);

//Add a div with a <h1> and a <p> attached to ti

const newContainer = document.createElement("div");

const H1 = document.createElement("h1");
H1.textContent = "I'm in a div";
newContainer.appendChild(H1);
const newParagraph = document.createElement("p");
newParagraph.textContent = "Me too";
newContainer.appendChild(newParagraph);

container.appendChild(newContainer);

// addEventListener

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
});

// Used through a function

function alertFunction() {
    alert("Hello again world");
}
functionBtn.addEventListener("click", alertFunction)

// Print informations about the event in the console log

btn.addEventListener('click', function (e) { // function (e) is a callback
    console.log(e);
  });