/* Given two integers a and b, which can be positive or negative, find the sum of all the integers
 between and including them and return it. If the two numbers are equal return a or b. */

function getSum(a, b) {
    if (a === b) return a
    let total = 0;
    let arr = [a, b].sort((y, z) => y - z)
    for (let i = arr[0]; i <= arr[1]; i++) {
        total += i
        console.log(i)
    }
    return total;
}

console.log(getSum(30, -30))
console.log(getSum(-72, -139))