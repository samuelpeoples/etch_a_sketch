//PROGRAM
let mode = 0;
createGrid(16, 16);
const normalButton = document.querySelector("#normalButton");
const shadeButton = document.querySelector("#shadeButton");
const colourButton = document.querySelector("#colourButton");
const resetButton = document.querySelector("#reset");

normalButton.addEventListener("click", () => {
	mode = 0;
	refreshGrid();
});
shadeButton.addEventListener("click", () => {
	mode = 1;
	refreshGrid();
});
colourButton.addEventListener("click", () => {
	mode = 2;
	refreshGrid();
});
resetButton.addEventListener("click", () => {
	refreshGrid();
});

function setMode(mode) {
	const grid = document.querySelectorAll("#square");
	if (mode == 0) {
		//REGULAR MODE
		grid.forEach((square) => {
			square.addEventListener("mouseenter", () => {
				square.setAttribute("style", "background-color: black;");
			});
			square.addEventListener("mouseleave", () => {
				square.setAttribute("style", "background-color: grey;");
			});
		});
	} else if (mode == 1) {
		//SHADE MODE
		grid.forEach((square) => {
			square.addEventListener("mouseenter", () => {
				let currentOpacity =
					getComputedStyle(square).getPropertyValue("opacity");
				currentOpacity -= 0.1;
				square.style.opacity = currentOpacity;
			});
		});
	} else {
		//COLOUR MODE
		grid.forEach((square) => {
			square.addEventListener("mouseenter", () => {
				square.style.backgroundColor = randomizeColor();
			});
		});
	}
}

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
	setMode(mode);
}

function randomizeColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function refreshGrid() {
	let gridHeight = prompt("How High do you want this grid?");
	while (gridHeight > 100) {
		gridHeight = prompt("How High do you want this grid?");
	}
	let gridWidth = prompt("How Wide do you want this grid?");
	while (gridWidth > 100 && typeof gridWidth !== Number) {
		gridWidth = prompt("How Wide do you want this grid?");
	}

	sketchContainer.replaceChildren();
	createGrid(gridHeight, gridWidth);
}
