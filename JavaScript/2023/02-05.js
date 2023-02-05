// 7 kyu - sum of grouped integers in a string

/* Assignment:
Your task in this kata is to implement a function that calculates the sum of the integers 
inside a string. For example, in the string 
"The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
 */

/* My Plan:
- Since we need to get the groupings of numbers and not just the single numbers, 
- I will create a tempNum variable and iterate throught the string with a for loop.
- If the el is a number, it will be added to the tempNum, otherwise, it will add the temp num to the toal and reset tempNum to 0
- Then, return total
 */

function sumOfIntegersInString(s) {
    s = s.split('')
    let total = 0
    let tempNum = ''
    for (let i = 0; i < s.length; i++) {
        if (!Number.isNaN(+s[i])) tempNum += s[i];
        else {
            total += Number(tempNum);
            tempNum = ''
        }
    }
    return total + Number(tempNum)
}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")) // 3635
console.log(sumOfIntegersInString("12.4")) // 16