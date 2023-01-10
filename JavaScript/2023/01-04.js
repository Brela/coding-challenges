/* 
7 hyu: determine if num is a square:

Given an integral number, determine if it's a square number:
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false 


My plan: 
if num is less than 0, return false. This will save the code from having to check nums that we know aren't valid

Then -> check num with a for loop and return when it finds the one that 
    when multipliedd by itself equals the num.
If not found, return false

*/

const isSquare = function (n) {
    if (n < 0) return false;
    for (let i = 0; i <= n; i++) {
        if (i * i === n) return true
    }
    return false;
}

console.log(isSquare(0))


// other simpler soution from someone else:
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}