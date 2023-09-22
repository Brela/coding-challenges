// for time complexity to be O(n) we need three separate for loops
// one to make an object out of the first
// two to make an object out of the second
// three to compare the values of the frist and second by this : for (let key in objOne) {} to access it and compare to object two values with the same key

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  // 2 empty objs
  let objOne = {};
  let objTwo = {};
  // fill the first obj with the char as key and occurances as the value
  for (let char of str1) {
    objOne[char] = objOne[char] + 1 || 1;
  }
  console.log(objOne);

  // then do the same with the second string
  for (let char of str2) {
    objTwo[char] = objTwo[char] + 1 || 1;
  }
  console.log(objTwo);

  // then compare the second to the first by checking the key of the first to the key of the second

  for (let key in objOne) {
    // console.log(objOne[key])

    if (!objTwo[key]) return false;
    if (objOne[key] !== objTwo[key]) return false;
  }

  // check if the first obj is empty

  return true;
}

console.log(validAnagram("anagram", "nagaram"));
