/* 5kyu - how many 9's in count from 1 to n?
Counting from 1 to n. How many times will I use a '9'?

9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a positive integer.

Examples (input -> output)
8  -> 0
9  -> 1
10 -> 1
98 -> 18
100 -> 20
*/

// My Plan: use a for loop to check each num up to n -> inside each iteration, 
// it will check the num and add it's 9's to a counter

function number9(n) {
    let counter = 0;
    for (let i = 1; i <= n; i++) {
        let iString = i.toString().split('')
        if (iString.includes('9')) {
            let count = iString.filter(el => el === '9')
            counter += count.length
        }
    }
    return counter;
}
console.log(number9(100))   // 20

// here is an optimized version with better time complexity: thanks to chatGPT

function count9s(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let iCopy = i;
        while (iCopy > 0) {
            if (iCopy % 10 === 9) {
                count++;
            }
            iCopy = Math.floor(iCopy / 10);
        }
    }
    return count;
}
