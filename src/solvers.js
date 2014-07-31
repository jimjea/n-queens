/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  // create a new instance of a board
  var newBoard = new Board({'n':n});
  // empty variable to return a single solution
  var solution;
  var counter = function(row) {
    // base case: once we've looked at each row, store the board, return the result;
    if(row === n) {
      solution = newBoard.rows();
      return;
    }
    // iterate through the row and check for conflicts
    // can just iterate up to n since that is the size of the matrix
    for (var i = 0; i < n; i++) {
      // toggle the piece
      newBoard.togglePiece(row,i);
      // use helper functions to check row or column conflicts
      // in this case, false is true; false = there are no conflicts
      if (!newBoard.hasAnyRooksConflicts()) {
        // if it doens't conflict, we can recurse and start on a new row
        counter(row+1);
      }
      // we need to toggle the piece back to continue searching through the top row
      // when we recurse, it will create its own scope
      newBoard.togglePiece(row,i);
    }
  }
  counter(0);
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // create a new instance of a board
  var newBoard = new Board({'n':n});
  // empty variable to return a single solution
  var count = 0;
  var counter = function(row) {
    // base case: once we've looked at each row, store the board, return the result;
    if(row === n) {
      count++;
      return;
    }
    // iterate through the row and check for conflicts
    // can just iterate up to n since that is the size of the matrix
    for (var i = 0; i < n; i++) {
      // toggle the piece
      newBoard.togglePiece(row,i);
      // use helper functions to check row or column conflicts
      // in this case, false is true; false = there are no conflicts
      if (!newBoard.hasAnyRooksConflicts()) {
        // if it doens't conflict, we can recurse and start on a new row
        counter(row+1);
      }
      // we need to toggle the piece back to continue searching through the top row
      // when we recurse, it will create its own scope
      newBoard.togglePiece(row,i);
    }
  }
  counter(0);
  return count;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // create a new instance of a board
  var newBoard = new Board({'n':n});
  // empty variable to return a single solution
  var solution;
  var counter = function(row) {
    // base case: once we've looked at each row, store the board, return the result;
    if(row === n) {
      solution = newBoard.rows();
      return;
    }
    // iterate through the row and check for conflicts
    // can just iterate up to n since that is the size of the matrix
    for (var i = 0; i < n; i++) {
      // toggle the piece
      newBoard.togglePiece(row,i);
      // use helper functions to check row, column, or diagonals conflicts
      // in this case, false is true; false = there are no conflicts
      if (!newBoard.hasAnyQueensConflicts()) {
        // if it doens't conflict, we can recurse and start on a new row
        counter(row+1);
      }
      // we need to toggle the piece back to continue searching through the top row
      // when we recurse, it will create its own scope
      newBoard.togglePiece(row,i);
    }
  }
  counter(0);
  return solution;

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // create a new instance of a board
  var newBoard = new Board({'n':n});
  // empty variable to return a single solution
  var count = 0;
  var counter = function(row) {
    // base case: once we've looked at each row, store the board, return the result;
    if(row === n) {
      count++;
      return;
    }
    // iterate through the row and check for conflicts
    // can just iterate up to n since that is the size of the matrix
    for (var i = 0; i < n; i++) {
      // toggle the piece
      newBoard.togglePiece(row,i);
      // use helper functions to check row, column, or diagonals conflicts
      // in this case, false is true; false = there are no conflicts
      if (!newBoard.hasAnyQueensConflicts()) {
        // if it doens't conflict, we can recurse and start on a new row
        counter(row+1);
      }
      // we need to toggle the piece back to continue searching through the top row
      // when we recurse, it will create its own scope
      newBoard.togglePiece(row,i);
    }
  }
  counter(0);
  return count;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
};
