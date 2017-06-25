let gameField = [
	["O", "X", null],
	["O", null, null],
	["O", "O", "O"]
]

// This checks the rows.
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

// This checks the diagonal rows.



// This function checks the colums.
// This transpositions the gamefield so the same check script works.
// Flipping the matrix! There is no spoon :) 
function transposGameField(gameField, gameFieldLength) {
	let columnFlipArray = [];

	// This makes the nessasery amount of empty array within the
	// new parrent array columnFlipArray.
	for (var i = 0; i < gameField.length; i++) {
		columnFlipArray.push([]);
	}

	// This takes the colums of the gamefield array and pushes them
	// into the rows of the columnFlipArray.
	for (var i = 0; i < gameField.length; i++) {
		for (var j = 0; j < gameFieldLength; j++) {
			columnFlipArray[j].push(gameField[i][j]);
		};
	};
	console.log(columnFlipArray);

	// This is the same script for checking rows but moded for columns.
	for (var row = 0; row < columnFlipArray.length; row++) {
	
		let matchWinNum = 3;
		let counter = 0;
		let player = null;

		for (var col = 0; col < columnFlipArray[row].length; col++) {
			
			if(player === columnFlipArray[row][col]) {
				counter++
				console.log("counter +1");

				if(player !== null && counter === matchWinNum) {
					// Columns are now rows so I print row numbers.
					console.log("Winner is: " + player + " col nr: " + row);
					// return player;
				}	

			} else {
				player = columnFlipArray[row][col];
				counter = 1;
				console.log("No winner in col: " + row)
			}		
		}
	}
}

transposGameField(gameField, 3)





// for (var row = 0; row < gameField.length; row++) {
	
// 	let matchWinNum = 2;
// 	let counter = 0;
// 	let player = null;
// 	let checkCol = [];

// 	for (var col = 0; col < gameField[row].length; col++) {
// 		player = gameField[0][col];

// 		for (var insert = 0; insert < gameField[row].length; insert++) {
// 			checkCol.push([gameField[insert][col], gameField[insert + 1][col], gameField[insert + 2][col]]);
// 		}

// 		console.log(checkCol);
		


		// for (var colPos = 0; colPos < checkCol.length; colPos++) {
		// 	if(player === checkCol[colPos]) {
		// 		counter++
		// 		console.log("counter +1");
		// 	}
		// }

		// if(player === gameField[row][col]) {
		// 	counter++
		// 	console.log("counter +1");
		// 	player = gameField[row + 1][col];

		// 	if(player === gameField[row + 2][col]) {
		// 		counter++
		// 		console.log("counter +1")
		// 	}

		// 	if(player !== null && counter === matchWinNum) {
		// 		console.log("Winner is: " + player + " col nr: " + col);
		// 		// return player;
		// 	}	

		// } else {
		// 	player = gameField[0][col];
		// 	counter = 0;
		// 	console.log("No winner in col: " + col)
		// }		
// 	}
// }
	
