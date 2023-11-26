// check that the second array has the squared values of the first with the same count - return true or false

// option 1 - bad
// O(n**2)
// is using a nested for loop - or .indexOf() (like a for loop) inside a for loop

function same(arr1, arr2) {
  // if the arrays are not equal length, return false
  if (arr1.length !== arr2.length) return false;
  for (let item1 of arr1) {
    // for each item in the first array, find the squared number in the second array and remove it
    let indexOf2 = arr2.indexOf(item1 ** 2);
    if (indexOf2 === -1) return false;
    arr2.splice(indexOf2, 1);
    console.log(arr2);
    // if === -1 that means it wasn't found and you can remove it
  }

  return true;
}

console.log(same([1, 3, 5, 4], [1, 9, 16, 25])); // should return true

// option 2 - good
// O(n)
// is using 2 separate for loops

function same2(arr1, arr2) {
  // if the arrays are not equal length, return false
  if (arr1.length !== arr2.length) return false;

  let arr1Obj = {};
  let arr2Obj = {};
  for (let item1 of arr1) {
    arr1Obj[item1] = arr1Obj[item1] + 1 || 1; // item1 from arr becomes key in obj
  }
  for (let item2 of arr2) {
    arr2Obj[item2] = arr2Obj[item2] + 1 || 1;
  }
  console.log("array 1 obj", arr1Obj);
  console.log("array 2 obj", arr2Obj);

  // check that the second obj has a key for each of the first arr squared
  for (let key in arr1Obj) {
    if (!(key ** 2) in arr2Obj) return false;
    if (arr2Obj[key ** 2] !== arr1Obj[key]) return false;
  }
  return true;
}

console.log(same2([1, 3, 5, 4], [1, 9, 16, 25])); // should return true
