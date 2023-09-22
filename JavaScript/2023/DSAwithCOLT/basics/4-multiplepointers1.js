// count unique values in array

function countUniqueValues(arr) {
  if (arr.length === 0) return 0; // Handle empty array

  let p1 = 0; // index of pointer 1 (it will represent the position of last found unique value)
  let p2 = 1; // index of pointer 2 (it will scan through the array)

  while (p2 < arr.length) {
    if (arr[p1] !== arr[p2]) {
      p1++;
      arr[p1] = arr[p2];
    }
    p2++;
  }
  return p1 + 1; // p1 is 0-indexed, so we add 1 to get the count
}

console.log(countUniqueValues([1, 2, 3, 3, 3, 5, 6, 7, 7])); // 6
