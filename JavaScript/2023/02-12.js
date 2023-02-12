// 7 kyu - sum of cubes

/* Assignment: 
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
Assume that the input n will always be a positive integer. */

// my solution:
function sumCubes(n) {
    let sum = 0
    for (i = 1; i <= n; i++) {
        sum += Math.pow(i, 3)
    }
    return sum
}
console.log(sumCubes(10)) // 3025




// a nice recursive function by someone else
function sumCubes2(n) {
    if (n == 1) {
        return n ** 3;
    } else {
        return n ** 3 + sumCubes(n - 1);
    }
}