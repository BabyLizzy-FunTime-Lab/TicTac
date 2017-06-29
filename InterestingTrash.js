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