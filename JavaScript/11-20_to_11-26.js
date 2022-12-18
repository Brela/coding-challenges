// ================================ 11-20   ===============================

/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

//need to check for each item in test onto original and figure out if anagram can be not same length as original

// MINE
function isAnagram(test, original) {
    original = original.toLowerCase()
    if (test.length !== original.length) {
        return false;
    } else {
        var test = test.toLowerCase().split('')
        for (let i = 0; i < original.length; i++) {
            if (test.includes(original[i])) {
                let index = test.indexOf(original[i])
                // if test word includes the letter being tested from original word, 
                //the index of that first letter is found in test word so that it can be removed with splice
                test.splice(index, 1)
            }
        }
        return test.length === 0 ? true : false;
    }
};

// BEST VOTED
var isAnagram = function (test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t == o) ? true : false;
};

// ================================ 11-20   ===============================

/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

// mine = best solution
function sumMix(x) {
    return x.map(el => Number(el)).reduce((prev, curr) => prev + curr, 0)
}

// console.log(sumMix([9, 3, '7', '3']))

// ================================ 11-24   ===============================

/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

 */

function getDivisorsCnt(n) {
    let x = 0
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            x += 1
        }
    }
    return x
}
console.log(getDivisorsCnt(100))