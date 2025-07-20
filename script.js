const grid = document.querySelector(".container");
// const row = document.querySelector(".row");

function createGrid() {
    for (let i = 0; i < 16; i++){
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < 16; j++){
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridSquare");
            row.appendChild(gridElement);
        }
        grid.appendChild(row);
    }
}

createGrid();