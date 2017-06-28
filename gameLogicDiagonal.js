// This code should check the diagonal rows of a matrix of any size.
// Once 3 in a row has been found, the winner is called.
// It should also be adjustable so you can increase the number of
// row matches.

// This code does not yet work.

for (var row = 0; row < gameField.length; row++) {
	
	let matchWinNum = 3;
	let counter = 0;
	let player = null;

	for (var col = 0; col < gameField[row].length; col++) {
		
		if(player === gameField[row + 1][col + 1]) {
			counter++
			console.log("counter +1");

			if(player !== null && counter === matchWinNum) {
				console.log("Winner is diagonal: " + player + " row nr: " + row);
				// return player;
			}	

		} else {
			player = gameField[row][col];
			counter = 1;
			console.log("No winner diagonal: " + row)
		}		
	}
}

// Transpos
// 2 ways to do this. Transpos the diagonals into rows.
// I need to do it in two directions.

// Counter.
// check how many in a row we can get with a counter. 
// I need to keep in mind on undefind array spots. 

// function transposDiag_To_Row(gameField, gameFieldLength) {
// 	let down = [];
// 	let up = [];

// 	// This makes 3 new arrays within down.
// 	for (var i = 0; i < gameField.length; i++) {
// 		down.push([]);
// 		up.push([]);
// 	}

// 	for (var i = 0; i < gameField.length; i++) {
// 			for (var j = 0; j < gameFieldLength; j++) {

// 			let Insert = 
// 			columnFlipArray[j].push(gameField[i][j]);
// 		};
// 	};
// 	console.log(down);
// };


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
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////