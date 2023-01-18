// 5 kyu - Move zeros to the End

/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

// MY PLAN - use filter to filter out the 0's into one array and everything else in another, then use concat to combine them together

function moveZeros(arr) {
    let arr1 = arr.filter(el => el === 0)
    let arr2 = arr.filter(el => el !== 0)
    return arr2.concat(arr1)
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) //  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
