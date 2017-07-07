let gameField = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
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

			if(counter === 2 && down !== null) {
				winnerFound = down;
				break;
			}
		} else {
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
		winnerFound = first;
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

				if(player !== null && counter === matchWinNum) {
					winnerFound = player;
				}	

			} else {
				player = gameField[row][col];
				counter = 1;
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

	// This is the same script for checking rows but moded for columns.
	for (var row = 0; row < columnFlipArray.length; row++) {
	
		let matchWinNum = 3;
		let counter = 0;
		let player = null;

		for (var col = 0; col < columnFlipArray[row].length; col++) {
			
			if(player === columnFlipArray[row][col]) {
				counter++

				if(player !== null && counter === matchWinNum) {
					// Columns are now rows so I print row numbers.
					winnerFound = player;
					break;
				}	

			} else {
				player = columnFlipArray[row][col];
				counter = 1;
			}		
		}
	}
}

function playGame(player, row, column) {

	if(player === playerTurn || playerTurn === null) {
		gameField[row][column] = player;

		if(player === "X") {
		playerTurn = "O";
		} else if(player === "O") {
			playerTurn = "X";
		}

		checkDownDiag(gameField);
		checkUpDiag(gameField);
		checkRows(gameField);
		checkColumns(gameField, 3);
		UI();

	} else {
		UI();
	}
	
}



let playerTurn = null;
let winnerFound = null;

function UI() {
	console.log("\nWelcome to TicTacToe!\n");
	console.log(gameField[0]);
	console.log(gameField[1]);
	console.log(gameField[2]);


	if(playerTurn === null) {
		console.log("\nPlease enter X or O.");
		console.log("Like this: playGame('X', rowNumber, columnNumber);")
	}

	if(winnerFound !== null) {
		console.log("Winner is player: " + winnerFound);
		console.log("Thanks for playing");
		console.log("Game Over");
	} else {
		console.log("It is " + playerTurn + "'s turn.")
		console.log("Please enter: " + playerTurn);
		console.log("Like this: playGame('" + playerTurn + "' , rowNumber, columnNumber);");
	}

}

UI();
















	
