//PROGRAM

createGrid(16, 16);
const grid = document.querySelectorAll("#square");
const rows = document.querySelectorAll("#sketchRow");

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    refreshGrid();
});

//REGULAR MODE
// grid.forEach((square) => {
// 	square.addEventListener("mouseenter", () => {
// 		square.setAttribute("style", "background-color: black;");
// 	});
// 	square.addEventListener("mouseleave", () => {
// 		square.setAttribute("style", "background-color: grey;");
// 	});
// });

//SHADE MODE
grid.forEach((square) => {
	square.addEventListener("mouseenter", () => {
		//square.setAttribute("style", "background-color: black;");
        let currentOpacity = getComputedStyle(square).getPropertyValue("opacity");
        currentOpacity -= 0.1;
        square.setAttribute("style", `opacity: ${currentOpacity};`);
	});
	square.addEventListener("mouseleave", () => {
        //square.setAttribute("style", "background-color: grey;");
        
	});
});

///////////////////////////////////////////////////////////////////////////////

//LOGIC

function createGrid(gridHeight, gridWidth) {
	const sketchContainer = document.querySelector("#sketchContainer");

	for (let i = 0; i < gridHeight; i++) {
		const sketchRow = document.createElement("div");
		sketchRow.classList.add("sketchRow");
        sketchRow.id = "sketchRow";
		const sketchColumn = document.createElement("div");
		sketchColumn.classList.add("sketchColumn");
		sketchContainer.appendChild(sketchRow);
		sketchRow.appendChild(sketchColumn);
        
		for (let j = 0; j < gridWidth; j++) {
			const sketchSquare = document.createElement("div");
			sketchSquare.classList.add("sketchSquare");
			sketchSquare.id = "square";
			sketchColumn.appendChild(sketchSquare);
		}
	}
}

function refreshGrid() {
    let gridHeight = prompt("How High do you want this grid?");
    while (gridHeight > 100){
        gridHeight = prompt("How High do you want this grid?");
    }
    let gridWidth = prompt("How Wide do you want this grid?");
    while (gridWidth > 100 && typeof gridWidth !== Number){
        gridWidth = prompt("How Wide do you want this grid?");
    }

    sketchContainer.replaceChildren();
    createGrid(gridHeight, gridWidth);
}
