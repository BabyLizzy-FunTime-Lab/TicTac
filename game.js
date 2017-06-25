let gameField = [
	["X", "X", "O"],
	["O", "X", "X"],
	["X", "O", "X"]
]

for (var row = 0; row < gameField.length; row++) {
	// Tip from G: rowSpot can be also be called collum index because you are
	// now checking within the collums.
	let rowMatch = true; 

	for (var rowSpot = 1; rowSpot < gameField[row].length; rowSpot++) {

		let	previousRowPosition = gameField[row][rowSpot - 1];
		let nextRowPosition = gameField[row][rowSpot + 1];
		
		if(previousRowPosition !== gameField[row][rowSpot] ||
			gameField[row][rowSpot] !== nextRowPosition) {
			console.log("no winner in row: " + row);
			rowMatch = false;
			break;
		} 

		//  I don't understand why it prints no winner when I have 3 null.
		
		if(rowMatch === true && previousRowPosition !== null) {
			console.log("Row Winner is: " + gameField[row][rowSpot]);
			break;
		}			
	}
}

 ////DOES NOT WORK!!!!!!//////
for (var row = 1; row < gameField.length; row++) {
	// Tip from G: rowSpot can be also be called collum index because you are
	// now checking within the collums.
	let colMatch = true; 

	for (var col = 0; col < gameField[row].length; col++) {

		let	previousColPosition = gameField[1 - 1][col];
		let nextColPosition = gameField[1 + 1][col];
		
		if(previousColPosition !== gameField[1][col] ||
			gameField[1][col] !== nextColPosition) {
			console.log("no winner in column: " + col);
			colMatch = false;
			break;
		} 

		
		if(colMatch === true && previousColPosition !== null) {
			console.log("Col Winner is: " + gameField[row][col]);
			break;
		}			
	}
}

for (var row = 1; row < gameField.length; row++) {
	// Tip from G: rowSpot can be also be called collum index because you are
	// now checking within the collums.
	let rowMatch = true; 

	for (var col = 1; col < gameField[row].length; col++) {

		let	previousColPosition = gameField[row - 1][col - 1];
		let nextColPosition = gameField[row + 1][col + 1];
		
		if(previousColPosition !== gameField[row][col] ||
			gameField[row][col] !== nextColPosition) {
			console.log("no winner in column: " + col);
			rowMatch = false;
			break;
		} 

		//  I don't understand why it prints no winner when I have 3 null.
		
		if(rowMatch === true && previousColPosition !== null) {
			console.log("Col Winner is: " + gameField[row][col]);
			break;
		}			
	}
}

// for (var row = 0; row < gameField.length; row++) {
// 	// Tip from G: rowSpot can be also be called collum index because you are
// 	// now checking within the collums.
// 	let rowMatch = null; 

// 	for (var rowSpot = 1; rowSpot < gameField[row].length; rowSpot++) {

// 		let	previousRowPosition = gameField[row][rowSpot - 1];
// 		let nextRowPosition = gameField[row][rowSpot + 1];
		
// 		if(previousRowPosition === gameField[row][rowSpot]) {

// 			if(gameField[row][rowSpot] === nextRowPosition) {
// 				console.log("Winner is: " + gameField[row][0]);
// 				break;
// 			}

// 			console.log("no winner in row: " + row);
// 			rowMatch = false;
// 			break;
// 		} 

// 		// && previousRowPosition !== null
// 		if(rowMatch === true ) {
			
// 		}			
// 	}
// }





// This will go over the columns
// Row number is set to start looping from the next row.
// for (var row = 1; row < gameField.length; row++) {
// 	// Then we go over the columns
// 	let columnMatch = true;
// 	for (var col = 0; col < gameField[row].length; col++) {

// 		let winningCharCol = gameField[row - 1][col];

// 		// Here the current spot is comparaid with the previous spot in the columns.
// 	 	if (winningCharCol !== gameField[row][col] || gameField[row][col] === null) {
// 	 		console.log("no winner in column: " + col);
// 	 		columnMatch = false;
// 	 		break;
// 	 	}

// 	 	if (columnMatch === true) {
// 			console.log("Winner is: " + winningCharCol);
// 			break;
// 		}
// 	} 
// }

// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }
// function rowWin() {	
// 	if()
// }
	
