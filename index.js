let divContainer = document.querySelector(".divContainer");
let eraser = document.querySelector(".erase");
let inputNum = document.getElementById("myInput");
let submitButton = document.querySelector(".submit");
let num = 0;
let isEraserActive = false;

let clear = document.getElementsByClassName("clear")[0];

function createGrid() {
    if (isNaN(num) || num <= 0) {
        alert("Number is not acceptable");
        return;
    }
    if (num > 100) {
        alert("Too big of a number");
        return;
    }

    divContainer.innerHTML = "";

    const containerSize = 400;
    const cellSize = containerSize / num;

    for (let i = 0; i < num; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let j = 0; j < num; j++) {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("cell");
            
            columnDiv.style.width = `${cellSize}px`;
            columnDiv.style.height = `${cellSize}px`;

            rowDiv.appendChild(columnDiv);

            columnDiv.addEventListener("mouseenter", () => {
                if (!isEraserActive) {
                    columnDiv.classList.add("hovered");
                } else {
                    columnDiv.classList.remove("hovered");
                }
            });
        }

        divContainer.appendChild(rowDiv);
    }
    divContainer.style.border = "none";
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    num = Number(inputNum.value);
    createGrid();
});

eraser.addEventListener("click", () => {
    isEraserActive = !isEraserActive;
    eraser.classList.toggle("active", isEraserActive);
    eraser.textContent = isEraserActive ? "Draw" : "Erase";
});

clear.addEventListener("click", ()=>{
    document.querySelectorAll(".cell").forEach(cell =>{
        cell.classList.remove("hovered");
    });
});