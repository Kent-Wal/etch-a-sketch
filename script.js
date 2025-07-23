const container = document.querySelector(".container");

createGrid(16);

function createGrid(size) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    const gridWidth = grid.offsetWidth;

    for (let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");

            gridSquare.style.width = `${gridWidth / size}px`;
            gridSquare.style.height = `${gridWidth / size}px`;
            row.appendChild(gridSquare);

            gridSquare.addEventListener('mouseover', () => {
                gridSquare.style.backgroundColor = 'black';
            });
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);
}

//clear grid
const clearGrid = document.querySelector(".clearGrid");
clearGrid.addEventListener('click', () => {
    const gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
});

//change grid size
const gridSize = document.querySelector(".resizeGrid");
gridSize.addEventListener('click', () => {
    const grid = document.querySelector(".grid");
    let squareNum;

    while (1) {
        squareNum = prompt("Enter a size for the grid between 1 and 100:");

        if (squareNum >= 1 && squareNum <= 100) break;
    }
    grid.remove();
    createGrid(squareNum);
});

