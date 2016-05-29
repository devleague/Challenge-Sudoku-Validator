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
  var gridLength = Math.sqrt(num);

  for(var i = 0; i < num; i++){
    if(this.rowChecker(this.sudoku[i]) === false || this.columnChecker(i) === false){
        return false;
    }
  }
  for(var index = 0; index < num; index = index + gridLength){
    for(var j = 0; j < num; j = j + gridLength){
      this.gridChecker(index, j);
    }
  }
  return true;
};

SudokuValidator.prototype.rowChecker = function(row){ //row checking
  var lengthOfMatrix = row.length;
  var rowArray = [];
  for(var i = 0; i < lengthOfMatrix; i++){
    if((rowArray.indexOf(row[i]) === -1) && (row[i] > 0) && (row[i] <= lengthOfMatrix)){
      rowArray.push(row[i]);
    }else{
      return false;
    }
  }
  return true;
};

SudokuValidator.prototype.columnChecker = function(colIdx){
  var lengthOfMatrix = this.sudoku.length;
  var columnArray = [];
  for(var i = 0; i < lengthOfMatrix; i++){
    if(columnArray.indexOf(this.sudoku[i][colIdx]) === -1 && (this.sudoku[i][colIdx] > 0) && (this.sudoku[i][colIdx] <= lengthOfMatrix)){
      columnArray.push(this.sudoku[i][colIdx]);
    }else{
      return false;
    }
  }
  return true;
};

SudokuValidator.prototype.gridChecker = function(gridStart, gridEnd){
  var lengthOfMatrix = this.sudoku.length;
  var gridSize = Math.sqrt(lengthOfMatrix);
  var gridArray = [];
  for(var i = 0; i < gridSize; i++){
    for(var j = 0; j < gridSize; j++){
      if(gridArray.indexOf(this.sudoku[i][j]) === -1 && (this.sudoku[i][j] > 0) && (this.sudoku[i][j] <= lengthOfMatrix)){
        gridArray.push(this.sudoku[gridStart + i][gridEnd + j]);
      }else{
        return false;
      }
    }
  }
  return true;
};