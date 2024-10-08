const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
    if (input.value) {
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const deleteButton = document.createElement("button");

        listText.innerHTML = input.value;
        listItem.append(listText, deleteButton);
        deleteButton.textContent = "❌";
        list.appendChild(listItem);

        deleteButton.addEventListener("click", () => list.removeChild(listItem));
        input.focus();
        input.value = "";
    }
});