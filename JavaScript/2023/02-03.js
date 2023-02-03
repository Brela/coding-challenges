// 7 kyu pair zeros

/* Assignment:
  For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired.
 Pairing two 0s generates one 0 at the location of the first one. */


function pairZeros(arr) {
    let firstZero = true
    arr = arr.map(n => {
        if ((n === 0) && (firstZero === true)) firstZero = false
        else if ((n === 0) && (firstZero === false)) {
            firstZero = true
            n = '-'
        }
        return n
    })
    return arr.filter(el => el !== '-')
}


console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0])) // [1, 0, 1, 2, 0, 3, 0]