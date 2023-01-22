// 5 kyu - conway's look and say

/*          Assignment:
Your task is to create a function that will take an integer and return the result of the look-and-say function on that integer. 
Conway's Look-and-say sequence goes like this:

Look at the number, and group consecutive digits together.
For each digit group, say the number of digits, then the digit itself.
This can be repeated on its result to generate the sequence.

For example:
Start with 1.
There is one 1 --> 11
Start with 11. There are two 1 digits --> 21 */

function lookSay(num) {
    num = String(num).split('')
    let conwaysNum = '';
    let countOfConsecutiveNums = 1;
    let number = num[0]
    while (num.length > 1) {
        if (num[0] === num[1]) {
            countOfConsecutiveNums += 1
        }
        else {
            conwaysNum = conwaysNum.concat(countOfConsecutiveNums + number)
            countOfConsecutiveNums = 1
            number = num[1]
        }
        num.shift()
        console.log('second  ' + num)
    }
    conwaysNum = conwaysNum.concat(countOfConsecutiveNums + number)
    return Number(conwaysNum)
}


console.log(lookSay(24445555)) // 12 34 45

/*          What I did:
I iterated through the string with a while loop.
In each iteration, the function checks if the current digit is the same as the next digit.
If it is, the count of consecutive occurrences is incremented by 1. 
If it's not, the function concatenates the count and the digit to the resulting string, resets the count 
and updates the number being processed. When the loop in done, the last digit and its count are concatenated to the resulting string. 
*/
