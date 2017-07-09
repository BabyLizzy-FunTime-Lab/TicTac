// This is the gameLogic module.
const gameLogic = require('./gameLogic.js');
// This is npm package prompt. I did not use sync-prompt, shit is broken yo :)
const prompt = require('prompt');

// npm prompt starts.
prompt.start();

// This keeps track of who's turn it is.
let playerTurn = null;

// The UI function creates a user interface and so the user can input
// his move. This function also declares the winner.
function UI(gameStatus) {
	console.log("\nWelcome to TicTacToe!\n");
	console.log(gameLogic.gameField[0]);
	console.log(gameLogic.gameField[1]);
	console.log(gameLogic.gameField[2]);

	let status = gameStatus || false;

	// No winner yet.
	if(status === false) {
		// Game just started.
		if(playerTurn === null) {
			console.log("\nPlease enter X or O.");
			console.log("Row and column numbers start at 0.");
			// This prompts the user.
			prompt.get(['playCharacter', 'rowNumber', 'columnNumber'], function (err, result) {
				playGame(result.playCharacter, result.rowNumber, result.columnNumber);
			});
		// Game in progress.
		} else {
			console.log("It is " + playerTurn + "'s turn.")
			console.log("Please enter: " + playerTurn);
			// This prompts the user.
			prompt.get(['playCharacter', 'rowNumber', 'columnNumber'], function (err, result) {
				playGame(result.playCharacter, result.rowNumber, result.columnNumber);
			});
		} 
	}

	// If the matrix coordinates are already populated. The player must choose again.
	if(status === "pos_Occupied") {
		console.log("\nThe previously selected coordinate are taken.\nPlease choose again.\n")
		console.log("It is " + playerTurn + "'s turn.")
		console.log("Please enter: " + playerTurn);
		// This prompts the user.
		prompt.get(['playCharacter', 'rowNumber', 'columnNumber'], function (err, result) {
			playGame(result.playCharacter, result.rowNumber, result.columnNumber);
		});
	}

	// This is the winner message.
	if(status === "X" || status === "O") {
		console.log("Winner is player: " + winner);
		console.log("Thanks for playing");
		console.log("Game Over");
	}
};

// The playGame function does the row checks and updates who's turn it is.
function playGame(player, row, column) {
	// This checks if the user forgot to fill in a prompt.
	if(player === '' || row === '' || column === ''){
		UI();
		return;
	};

	// This checks if the chosen matrix coordinate is already taken.
	if( gameLogic.gameField[row][column] === "X" ||
		gameLogic.gameField[row][column] === "O") {
		UI("pos_Occupied");
		return;
	};

	// This checks if the right player is playing and if the game just started.
	// If the game just started playerTurn === null.
	if(player === playerTurn || playerTurn === null) {
		gameLogic.gameField[row][column] = player;

		// Turn update.
		if(player === "X") {
		playerTurn = "O";
		} else if(player === "O") {
			playerTurn = "X";
		};

		// Row, col and diag checks.
		if( gameLogic.checkDownDiag(gameLogic.gameField) === true ||
			gameLogic.checkUpDiag(gameLogic.gameField) === true ||
			gameLogic.checkRows(gameLogic.gameField) === true ||
			gameLogic.checkColumns(gameLogic.gameField, 3) === true) {
			UI(player);
		} else {
			gameLogic.checkDownDiag(gameLogic.gameField)
			gameLogic.checkUpDiag(gameLogic.gameField)
			gameLogic.checkRows(gameLogic.gameField)
			gameLogic.checkColumns(gameLogic.gameField, 3)
			UI();
		};

	} else {
		UI();
	}
};

// The game starts by running the UI function.
UI();

