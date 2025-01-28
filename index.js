let divContainer = document.getElementsByClassName("divContainer")[0];
let eraser = document.getElementsByClassName("eraser")[0];
let num = 0;

function createGrid(){
let getNumber = Number(prompt("How big would you like your grid?"));
num = getNumber;

if(isNaN(num) || num < 0){
    alert("Number is not acceptable");
    return;
}if(num > 50){
    alert("Too big of a number");
    return;
}

divContainer.innerHTML = "";

for(let i = 0; i < num; i++){
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rows");

    for(let j = 0; j < num; j++){
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("columns");;
        rowDiv.appendChild(columnDiv);
        columnDiv.addEventListener("mouseenter", ()=>{
            columnDiv.classList.remove("columns");
            columnDiv.classList.add("rows");
        });

        eraser.addEventListener("click", ()=>{
            columnDiv.addEventListener("mouseenter", ()=>{
                columnDiv.classList.remove("rows");
                columnDiv.classList.add("columns");
            })
        });
    }

    divContainer.appendChild(rowDiv);
}
}

createGrid();


divContainer.addEventListener("mouseenter", ()=>{

});