const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const userInput = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listSpan = document.createElement("span");
    const deleteButton = document.createElement("button");

    listItem.appendChild(listSpan, deleteButton);
    listSpan.textContent = userInput;
    deleteButton.textContent = "Delete";

    list.appendChild(listItem)

    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
    })

    input.focus();


});




