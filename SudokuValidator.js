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
  if (Number.isInteger(Math.sqrt(num))) {
    for (var i = 0; i < num; i++) {
      for (var j = 0; j < num; j++) {
        if (this.sudoku[i].indexOf(this.sudoku[i][j]) !== j) {
          return false;
        } else if (this.sudoku[i][j] > num) {
          return false;
        }
      }
    }
    return true;
  }
}