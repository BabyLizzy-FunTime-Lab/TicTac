let gameField = [
	["X", "O", "O"],
	["X", "O", "X"],
	["X", null, null]
]

// for (var row = 0; row < gameField.length; row++) {
// 	// Tip from G: rowSpot can be also be called collum index because you are
// 	// now checking within the collums.
// 	let rowMatch = true;
// 	for (var rowSpot = 1; rowSpot < gameField[row].length; rowSpot++) {
// 		// You can select a row by going back to the gameField[row].
		
// 		// winningCharacter stores the previous character position so it can
// 		// be compaired to the current one.  
// 		let winningCharRow = gameField[row][rowSpot - 1];

// 		// This checks the rows.
// 		// if the characters are the same but also null it will break.
// 		if(winningCharRow !== gameField[row][rowSpot] || gameField[row][rowSpot] === null) {
// 			console.log("no winner in row: " + row);
// 			rowMatch = false;
// 			break;
// 		} 

// 		if(rowMatch === true && gameField[row][0] !== null) {
// 			console.log("Winner is: " + gameField[row][0]);
// 			break;
// 			// is it logicaly ok for me to but a break here?
// 			// Here by I assume that the winner is gameField[row][0];
// 		}			
// 	}
// }

for (var row = 1; row < gameField.length; row++) {
	let columnMatch = true;

	for (var columnSpot = 0; columnSpot < gameField[row].length; columnSpot++) {
	 	if (gameField[row - 1][columnSpot] !== gameField[row][columnSpot]) {
	 		console.log("no winner in column: " + columnSpot);
	 		columnMatch = false;
	 		break;
	 	}

	 	if (columnMatch === true && )
	 	
	 } 
	

	// This checks the colums.
		// if(gameField[row][rowSpot - 1] !== gameField[row + 1][rowSpot - 1]) {
		// 	console.log("no winner in colum: " + (rowSpot -1));
		// 	break;
		// } else {
		// 	console.log("no winner in colum: " + (rowSpot -1));
		// 	break;
		// }

		// 	if(gameField[row][0] !== null) {
		// 		console.log(gameField[row][0] + " won!!");				
		// 	}
		// } 
}

// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }
// function rowWin() {	
// 	if()
// }
	
