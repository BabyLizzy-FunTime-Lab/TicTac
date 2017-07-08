const gameLogic = require('./gameLogic.js');

let playerTurn = null;

// The UI function creates a user interface and so the user can input
// his move. This function also declares the winner.
function UI(winnerFound) {
	console.log("\nWelcome to TicTacToe!\n");
	console.log(gameLogic.gameField[0]);
	console.log(gameLogic.gameField[1]);
	console.log(gameLogic.gameField[2]);

	let winner = winnerFound || false;

	if(winner === false) {
		if(playerTurn === null) {
			console.log("\nPlease enter X or O.");
			console.log("Like this: playGame('X', rowNumber, columnNumber);")
		} else {
			console.log("It is " + playerTurn + "'s turn.")
			console.log("Please enter: " + playerTurn);
			console.log("Like this: playGame('" + playerTurn + "' , rowNumber, columnNumber);");
		} 
	}

	if(winner === "X" || winner === "O") {
		console.log("Winner is player: " + winner);
		console.log("Thanks for playing");
		console.log("Game Over");
	}
	
}

// The playGame function does the row checks and updates who's turn it is.
function playGame(player, row, column) {

	if(player === playerTurn || playerTurn === null) {
		gameLogic.gameField[row][column] = player;

		if(player === "X") {
		playerTurn = "O";
		} else if(player === "O") {
			playerTurn = "X";
		}

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
		}

	} else {
		UI();
	}
}

// The game starts by running the UI function.
UI();

playGame("X",0,0);
playGame("O",0,1);
playGame("X",1,1);
playGame("O",1,0);
playGame("X",2,2);















	
