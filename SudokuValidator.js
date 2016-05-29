/*  SudokuValidator(sudoku)
 *
 *  @param sudoku                       a multidimensional array containing the sudoku puzzle
 *
 *  @public property sudoku             the sudoku grid
 *
 *  @public method validate(num)        num is the perfect squared value of an integer
                                        for example: 9(result of 3^3) & 4 (2^2).
 */

exports.SudokuValidator = SudokuValidator;

function SudokuValidator(sudoku){
  this.sudoku = sudoku;
}

SudokuValidator.prototype.validate = function(num){
  // Do work here
  var columnArray = [];
  if (Number.isInteger(Math.sqrt(num))) {
    for (var i = 0; i < num; i++) {
      columnArray.push([]);
      for (var j = 0; j < num; j++) {
        columnArray[i].push(this.sudoku[j][i]);
        if (this.sudoku[i].indexOf(this.sudoku[i][j]) !== j) {
          return false;
        } else if (this.sudoku[i][j] > num) {
          return false;
        } else if ((columnArray[i].indexOf(columnArray[i][j]) !== j)) {
          return false;
        }
      }
    }
  }
  return true;
}