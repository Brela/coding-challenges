// 8yu: easy day. sum all nums up to num

/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) 

My plan: use a for loop to iterate over each num up to the num, adding each as it goes
*/

var summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i
    }
    return total;
}