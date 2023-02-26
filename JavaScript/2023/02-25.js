// 6 kyu - persistance bugger

/* Write a function, persistence, that takes in a positive parameter num and returns its
 multiplicative persistence, which is the number of times you must multiply the digits in num
  until you reach a single digit.

For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit) */

function persistence(num) {
    let counter = 0;
    while (num >= 10) {
        num = num.toString();
        let tempNum = 1;
        for (let i = 0; i < num.length; i++) {
            tempNum *= num[i];
        }
        num = tempNum;
        counter += 1;
    }
    return counter;
}


console.log(persistence(999)) // 4
console.log(persistence(39)) // 3
console.log(persistence(4)) // 0