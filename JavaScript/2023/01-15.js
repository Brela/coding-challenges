// 6 kyu - narcissitic number - aka a num which is the sum of its own digits, each raised to the power of the number of digits in a given base


/* For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 */


// My Plan: make number a string, then split it and get the length. Use a loop to add each num into an equation in an array, 
// then add each completed equation to a total

function narcissistic(n) {
    num = String(n).split('')
    let total = 0
    for (let i = 0; i < num.length; i++) {
        total += num[i] ** num.length
    }
    return total == n
}

console.log(narcissistic(1))    // true
console.log(narcissistic(7))    // true
console.log(narcissistic(371))   // true