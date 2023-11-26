// refactored from Colt - called the Sliding Window Pattern

function maxSubarraySum2(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length === 0) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	for (i = num; i < arr.length; i++) {
		tempSum = maxSum - arr[i - num];
		tempSum += arr[i];
		maxSum = Math.max(tempSum, maxSum);
		console.log();
	}

	return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)); // 17

// 1st try version - did by myself
function maxSubarraySum(arr, num) {
	if (arr.length == 0) return null;
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		let sliced = arr.slice(i, i + num);

		let reduced = sliced.reduce((acc, curr) => acc + curr);

		if (reduced > max) max = reduced;
	}
	return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
