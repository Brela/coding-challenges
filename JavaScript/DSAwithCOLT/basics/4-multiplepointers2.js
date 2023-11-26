// multiple pointers can be done with p2 starting next ot p1 or with them starting on separate ends and going inward untill they meet ( see example 2)

// Write a function called averagePair.
// Given a sorted array of integers and a target average, determine if there is a pair of values in the
// array where the average of the pair equals the target average.
//  There may be more than one pair that matches the average target.

function averagePair(arr, target) {
	// Initialize pointers
	let p1 = 0;
	let p2 = arr.length - 1;

	// Loop until pointers meet
	while (p1 < p2) {
		// Calculate the average of the pair
		let avg = (arr[p1] + arr[p2]) / 2;

		// Check if the average matches the target
		if (avg === target) return true;

		// Adjust pointers
		if (avg < target) {
			p1++;
		} else {
			p2--;
		}
	}

	return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // Should return true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // Should return true
