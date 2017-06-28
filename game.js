let gameField = [
	["O", "X", "O"],
	["X", "O", null],
	["O", "X", "O"]
]

// This checks the diagonal rows in a 2d matrix of 3 x 3.
let rowAmount = 3;
let counter = 0;

// Check diag downwards.
// function downDiag(gamefield) {
// 	for (var checkNr = 0; checkNr < rowAmount - 1; checkNr++) {
// 		let down = gameField[checkNr][checkNr];
// 		let nextDown = gameField[checkNr + 1][checkNr + 1];

// 		if(down === nextDown) {
// 			counter++;
// 			console.log("One diagonal match has been found.\nDiagdown row starts at row: " + checkNr);

// 			if(counter === 2 && down !== null) {
// 				console.log("Winner is: " + down + " DownDiagonal, start row: " + (checkNr - 1));
// 				break;
// 			}
// 		} else {
// 			console.log("No diagonal match found at downdiagonal row starting at row: " + checkNr);
// 			counter = 0;
// 			break;
// 		}
// 	}
// }
// downDiag(gameField);


// Check diag upwards.
function upDiag(gamefield) {
	let col;

	for (var row = 2; row >= 0; row--) {
		if(row === 2) {
			col = row - 2;
		}
	}
}
upDiag(gameField);

// gameField[2][0]
// gameField[1][1]
// gameField[0][2]


// // This checks the rows.
// for (var row = 0; row < gameField.length; row++) {
	
// 	let matchWinNum = 3;
// 	let counter = 0;
// 	let player = null;

// 	for (var col = 0; col < gameField[row].length; col++) {
		
// 		if(player === gameField[row][col]) {
// 			counter++
// 			console.log("counter +1");

// 			if(player !== null && counter === matchWinNum) {
// 				console.log("Winner is: " + player + " row nr: " + row);
// 				// return player;
// 			}	

// 		} else {
// 			player = gameField[row][col];
// 			counter = 1;
// 			console.log("No winner in row: " + row)
// 		}		
// 	}
// }

// // This function checks the colums.
// // This transpositions the gamefield so the same check script works.
// // Flipping the matrix! There is no spoon :) 
// function transposCol_To_Row(gameField, gameFieldLength) {
// 	let columnFlipArray = [];

// 	// This makes the nessasery amount of empty array within the
// 	// new parrent array columnFlipArray.
// 	for (var i = 0; i < gameField.length; i++) {
// 		columnFlipArray.push([]);
// 	}

// 	// This takes the colums of the gamefield array and pushes them
// 	// into the rows of the columnFlipArray.
// 	for (var i = 0; i < gameField.length; i++) {
// 		for (var j = 0; j < gameFieldLength; j++) {
// 			columnFlipArray[j].push(gameField[i][j]);
// 		};
// 	};
// 	console.log(columnFlipArray);

// 	// This is the same script for checking rows but moded for columns.
// 	for (var row = 0; row < columnFlipArray.length; row++) {
	
// 		let matchWinNum = 3;
// 		let counter = 0;
// 		let player = null;

// 		for (var col = 0; col < columnFlipArray[row].length; col++) {
			
// 			if(player === columnFlipArray[row][col]) {
// 				counter++
// 				console.log("counter +1");

// 				if(player !== null && counter === matchWinNum) {
// 					// Columns are now rows so I print row numbers.
// 					console.log("Winner is: " + player + " col nr: " + row);
// 					// return player;
// 				}	

// 			} else {
// 				player = columnFlipArray[row][col];
// 				counter = 1;
// 				console.log("No winner in col: " + row)
// 			}		
// 		}
// 	}
// }

// transposCol_To_Row(gameField, 3)









// This is some old code that does not work.
// I still wish to study it.

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
	
