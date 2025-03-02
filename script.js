const sketchContainer = document.querySelector("#sketchContainer");

for (let i = 0; i < 16; i++) {
	const sketchRow = document.createElement("div");
	sketchRow.classList.add("sketchRow");
	const sketchColumn = document.createElement("div");
	sketchColumn.classList.add("sketchColumn");
	sketchContainer.appendChild(sketchRow);
	sketchRow.appendChild(sketchColumn);
    
	for (let j = 0; j < 16; j++) {
		const sketchSquare = document.createElement("div");
		sketchSquare.classList.add("sketchSquare");
		sketchColumn.appendChild(sketchSquare);
	}
}
