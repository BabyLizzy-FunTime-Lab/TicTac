////////////////////////////////////////////////////////////////////////
// This script is full of console.logs so I can track the srcipt returns.
////////////////////////////////////////////////////////////////////////

let gameField = [
	["O", "X", "O"],
	["X", "X", null],
	["O", "X", "O"]
]

// The diagonal checks only work for matrixes of 3 X 3 :(

// Check diag downwards.
function checkDownDiag(gamefield) {
	let rowAmount = 3;
	let counter = 0;

	for (var checkNr = 0; checkNr < rowAmount - 1; checkNr++) {
		let down = gameField[checkNr][checkNr];
		let nextDown = gameField[checkNr + 1][checkNr + 1];

		if(down === nextDown) {
			counter++;
			console.log("One diagonal match has been found.\nDiagdown row starts at row: " + checkNr);

			if(counter === 2 && down !== null) {
				console.log("Winner is: " + down + " DownDiagonal, start row: " + (checkNr - 1));
				break;
			}
		} else {
			console.log("No diagonal match found at downdiagonal row starting at row: " + checkNr);
			counter = 0;
			break;
		}
	}
}

// Check diag upwards.
function checkUpDiag(gamefield) {
	let first = gameField[2][0];
	let second = gameField[1][1];
	let third = gameField[0][2];

	if (first === second && 
		second === third && 
		first !== null) {
		console.log("Match found in upDiag starting row nr: " + 2);
	} else {
		console.log("No match found in upDiag starting row nr: " + 2);
	}
}

// This checks the rows.
function checkRows(gamefield) {
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
}

// This function checks the colums.
// This transpositions the gamefield so the same check script works.
// Flipping the matrix! There is no spoon :) 
function checkColumns(gameField, gameFieldLength) {
	// First I transpose the matrix.
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
					break;
				}	

			} else {
				player = columnFlipArray[row][col];
				counter = 1;
				console.log("No winner in col: " + row)
			}		
		}
	}
}

checkDownDiag(gameField);
checkUpDiag(gameField);
checkRows(gameField);
checkColumns(gameField, 3);