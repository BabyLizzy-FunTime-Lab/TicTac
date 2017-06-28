// This code should check the diagonal rows of a matrix of any size.
// Once 3 in a row has been found, the winner is called.
// It should also be adjustable so you can increase the number of
// row matches.

// The notation commonly used to describe the diagonal matrix is diag(a,b,c), 
// where abc represents the numbers in the leading diagonal. For the above matrix, 
// this notation would be diag(3,2,4)..



// All of this code does not yet work.

//////////////////////////////////////////////////////////
// This is an atempt to transpose diagonals into rows.
// It takes aal of the matrix and transposes all available diagonals into
// rows. Regardless of the possibility of a 3 match.
//
// it does not yet work.

// let flatDiagonal = [];

// for (var i = 2; i < gameField.length; i++) {
// [i]
// }

// function transposDiagonal_To_Row(level) {
// 	let extraRows; 
// 	// if level === 1,  add 2 empty arrays
// 	// if level === 2,  add 3 empty arrays
// 	// if level === 3,  add 4 empty arrays 
// 	return extraRows;
// }

// // This works for 3 x 3. 
// // I need a calculation in the place of the 2 if i want to increment 
// // matrix size.
// let row_diagonal_relation = gameField.Length + 2;
// ///////

// for (var i = 0; i < gameField.length + row_diagonal_relation; i++) {
// 	flatDiagonal.push(["derp"]); 
// };
// console.log(flatDiagonal);
///////////////////////////////////////////////////////////


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