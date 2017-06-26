let gameField = [
	["O", "X", null],
	["X", "O", null],
	["O", "X", "O"]
]



// This checks the diagonal rows.

// Transpos
// 2 ways to do this. Transpos the diagonals into rows.
// I need to do it in two directions.

// Counter.
// check how many in a row we can get with a counter. 
// I need to keep in mind on undefind array spots. 

function transposDiag_To_Row(gameField, gameFieldLength) {
	let down = [];
	let up = [];

	// This makes 3 new arrays within down.
	for (var i = 0; i < gameField.length; i++) {
		down.push([]);
		up.push([]);
	}

	for (var i = 0; i < gameField.length; i++) {
			for (var j = 0; j < gameFieldLength; j++) {

			let Insert = 
			columnFlipArray[j].push(gameField[i][j]);
		};
	};
	console.log(down);
};


// for (var row = 0; row < gameField.length; row++) {
	
// 	let matchWinNum = 3;
// 	let counter = 0;
// 	let player = null;

// 	for (var col = 0; col < gameField[row].length; col++) {


// 		for (var checkNr = 0; checkNr < matchWinNum; CheckNr++) {
// 			// let down = gameField[checkNr][checkNr];
// 			// let nextDown = gameField[checkNr + 1][checkNr + 1];

			

// 			// let up = gameField[checkNr + 1][checkNr];
// 			// let nextUp = gameField[checkNr - 1][checkNr + 1];

// 			if(up === undefined || nextDown === undefined || ) {

// 			} 

// 		}
		
// 	}
// }


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

// This function checks the colums.
// This transpositions the gamefield so the same check script works.
// Flipping the matrix! There is no spoon :) 
function transposCol_To_Row(gameField, gameFieldLength) {
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

transposCol_To_Row(gameField, 3)





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
	
