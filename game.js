let gameField = [
	["O", "O", "X"],
	["O", "X", "X"],
	["O", "O", "O"]
]

for (var row = 0; row < gameField.length; row++) {
	
	let matchWinNum = 3;
	let counter = 0;
	let player = null;

	for (var col = 0; col < gameField[row].length; col++) {
		
		if(player === gameField[row][col]) {
			counter++
			console.log("counter +1");

			if(player !== null && counter === matchWinNum) {
				console.log("Winner is: " + player + " row nr: " + row);
				// return player;
			}	

		} else {
			player = gameField[row][col];
			counter = 1;
			console.log("No winner in row: " + row)
		}		
	}
}


// This will go over the columns
// Row number is set to start looping from the next row.
// for (var row = 1; row < gameField.length; row++) {
// 	// Then we go over the columns
// 	let columnMatch = true;
// 	for (var columnSpot = 0; columnSpot < gameField[row].length; columnSpot++) {

// 		let winningCharCol = gameField[row - 1][columnSpot];

// 		// Here the current spot is comparaid with the previous spot in the columns.
// 	 	if (winningCharCol !== gameField[row][columnSpot] || gameField[row][columnSpot] === null) {
// 	 		console.log("no winner in column: " + columnSpot);
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
	
