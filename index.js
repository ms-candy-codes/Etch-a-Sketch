let divContainer = document.getElementsByClassName("divContainer")[0];
let eraser = document.getElementsByClassName("erase")[0];
let num = 0;
let isEraserActive = false;

function createGrid() {
    let getNumber = Number(prompt("How big would you like your grid?"));
    num = getNumber;

    if (isNaN(num) || num <= 0) {
        alert("Number is not acceptable");
        return;
    }
    if (num > 50) {
        alert("Too big of a number");
        return;
    }

    divContainer.innerHTML = "";

    for (let i = 0; i < num; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let j = 0; j < num; j++) {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("cell");
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
}

eraser.addEventListener("click", () => {
    isEraserActive = !isEraserActive;
    eraser.classList.toggle("active", isEraserActive);
    if(isEraserActive === true){
        eraser.textContent = "Draw";
    }else{
        eraser.textContent ="Erase";
    }
});

createGrid();
