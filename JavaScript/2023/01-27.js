// 4 kyu - sudoku solution validator

/*      ASSIGNMENT:
Write a function that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, 
or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. 
Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9. */

/*      MY PLAN:
- create an array of nums 1 to 9 that will check each section
- for each row, column , and 3x3 section, sort it then see if it matches the reference Array
- if it doesn't then return false
 */

function validSolution(board) {
    // reference array
    const rArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    function sort_and_check(a) {
        console.log(a)
        if (a.some(n => n === 0)) return false
        let sol = (rArr.toString() == [...a].sort((a, b) => a - b).toString())
        return sol

    }
    // check rows
    for (let i = 0; i < board.length; i++) {
        if (!sort_and_check(board[i])) return false;
    }
    //check columns
    for (let i = 0; i < board.length; i++) {
        let column = []
        for (let row = 0; row < board.length; row++) {
            column.push(board[row][i])
        }
        if (!sort_and_check(column)) return false;
    }
    //check sections of 3x3s
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            let sec = [].concat(
                board[row].slice(col, col + 3),
                board[row + 1].slice(col, col + 3),
                board[row + 2].slice(col, col + 3)
            );
            if (!sort_and_check(sec)) return false;
        }
    }

    return true
}


console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]])) // true

