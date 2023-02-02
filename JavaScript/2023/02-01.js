// 8 kyu - square(n) and sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    return numbers.reduce((prev, curr) => {
        return prev + Math.pow(curr, 2)
    }, 0)
}

console.log(squareSum([0, 3, 4, 5]))  // 50