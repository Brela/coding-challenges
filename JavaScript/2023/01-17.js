// 6 kyu : Matrix Transpose

/* Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:

| 1 2 3 |
| 4 5 6 |
is
| 1 4 |
| 2 5 |
| 3 6 | */

// MY PLAN: USE A LOOP TO ITERATE THROUGH THE ARR OF ARRAYS, PUSHING EACH ARRAY'S ELEMENTS TO A NEW ARRAY
// the length of the first matrix row (matrix[0]) will be the number of colums we need
// 2 separate loops, one for setting the empty arrays and one for pushong elements to them, might consolidate after

function transpose(matrix) {
    let newMatrix = []
    for (let i = 0; i < matrix[0].length; i++) {
        newMatrix[i] = []
    }
    for (let i = 0; i < matrix[0].length; i++) { // loops 3
        for (let j = 0; j < matrix.length; j++) { // loops 2
            newMatrix[i].push(matrix[j][i])
        }
    }
    return newMatrix
}
console.log(transpose([[1, 2, 3], [4, 5, 6]])) // [[1,4],[2,5],[3,6]]);  m[0][0], m[1][0], ], m[0][1], m[1][1]  , m[0][2], m[1][2]

// -------------------------------------------------------------------------------------------------------------------------------

// a similar solution by kannan: In this solution, they create a local temp array variable, 
// then add it's contents, then push that to the output array
function transpose(matrix) {
    var output = [];
    for (var i = 0; i < matrix[0].length; i++) {
        var temp = [];
        for (var j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
        }
        output.push(temp)
    }
    return output;
}