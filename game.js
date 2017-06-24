let gameField = [
	["O", "O", "O"],
	["X", "X", "O"],
	["O", null, "O"]
]

for (var row = 0; row < gameField.length; row++) {
	// Tip from G: rowSpot can be also be called collum index because you are
	// now checking within the collums.
	let rowMatch = true;
	for (var rowSpot = 1; rowSpot < gameField[row].length; rowSpot++) {
		// You can select a row by going back to the gameField[row].
		
		// winningCharacter stores the previous character position so it can
		// be compaired to the current one.  
		let winningCharRow = gameField[row][rowSpot - 1];

		// This checks the rows.
		// if the characters are the same but also null it will break.
		if(winningCharRow !== gameField[row][rowSpot] || gameField[row][rowSpot] === null) {
			console.log("no winner in row: " + row);
			rowMatch = false;
			break;
		} 

		if(rowMatch === true) {
			console.log("Winner is: " + gameField[row][0]);
			break;
		}			
	}
}


// This will go over the columns
// Row number is set to start looping from the next row.
for (var row = 1; row < gameField.length; row++) {
	// Then we go over the columns
	let columnMatch = true;
	for (var columnSpot = 0; columnSpot < gameField[row].length; columnSpot++) {

		let winningCharCol = gameField[row - 1][columnSpot];

		// Here the current spot is comparaid with the previous spot in the columns.
	 	if (winningCharCol !== gameField[row][columnSpot] || gameField[row][columnSpot] === null) {
	 		console.log("no winner in column: " + columnSpot);
	 		columnMatch = false;
	 		break;
	 	}

	 	if (columnMatch === true) {
			console.log("Winner is: " + winningCharCol);
			break;
		}
	} 
}

// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }
// function rowWin() {	
// 	if()
// }
	
