// O(n) validAnagram. instead of nesting a loop, created 2 diff objs of counts then campare them

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let key of str1) {
    obj1[key] = obj1[key] + 1 || 1;
  }

  for (let key of str2) {
    obj2[key] = obj2[key] + 1 || 1;
  }

  for (let key in obj1) {
    // console.log(obj1[key])

    if (!obj2[key]) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(validAnagram("rat", "tar"));
