/* Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3 */

function highestRank(arr) {
  if (arr.length < 1) return undefined;
  let nums = {};
  for (const n of arr) {
    nums[n] = nums[n] ? nums[n] + 1 : 1;
  }

  // the keys of 'nums' represent nums
  let largestNum = null;

  // the values of 'nums' represent frequencies
  let largestFrequency = 0;

  for (const key in nums) {
    if (
      nums[key] > largestFrequency ||
      (nums[key] === largestFrequency && key > largestNum)
    ) {
      largestNum = Number(key);
      largestFrequency = nums[key];
    }
  }

  return largestNum;
}
