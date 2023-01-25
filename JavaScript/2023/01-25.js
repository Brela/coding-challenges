// 6 kyu - find the parity outlier

/*     ASSIGNMENT:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except 
for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
 */


/*  My Plan:
The function must find the number that is not like the others (either even or odd)
First, I will take in 3 nums from the array and check to see which count (of evens or odds) is greater than 1
That will tell which the array mostly consists of,
Then. iterate through the array and find the one that isn't even or odd
*/

function findOutlier(arr) {
    const arrMajorityEvens = a => {
        let tally = 0
        if (isEven(a[0])) tally += 1;
        if (isEven(a[1])) tally += 1;
        if (isEven(a[2])) tally += 1;
        return tally > 1 ? true : false;
    }
    const isEven = n => n % 2 === 0;
    if (arrMajorityEvens(arr)) return arr.find(n => !isEven(n))
    if (!arrMajorityEvens(arr)) return arr.find(n => isEven(n))
}

console.log(findOutlier([2, 6, 8, 10, 3])) // 3

console.log(findOutlier([2, 3, 5, 7, 9])) // 2

// Time complexity O(n): 
// checks first three, then iteraties over the array once to find the single odd or even