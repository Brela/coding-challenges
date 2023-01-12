// 6 kyu : Find the odd int


/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

// My plan: iterate though the array while either creating a property for the num in an object if not yet created or, if it is already
// created, then increment the count by 1
// then iterate though the object and find the key with an odd value



function findOdd(arr) {
    let numsObj = {}
    arr.forEach(num => {
        // if the num being checked is alreay defined as a property of the numsObj object, then add one to it
        // otherwise, it is not defined ('||'), and make it 1
        numsObj[num] = numsObj[num] + 1 || 1
        // alternate version: numsObj[num] ? numsObj[num]++ : numsObj[num] = 1;
    })
    for (let key in numsObj) {

        if (numsObj[key] % 2 !== 0) return +key
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))