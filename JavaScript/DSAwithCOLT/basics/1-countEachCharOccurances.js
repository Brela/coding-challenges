// write a funciton that takes a string and returns the count of each Character
// clarity
// "asdf 345h"     ! ("&*^%"")

function charCount(str) {
  let count = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if the char is a number or letter, continue
    // if count has the char, count ++
    if (count[char]) {
      count[char] = count[char] + 1;
      // else create that property and assign 1
    } else {
      count[char] = 1;
    }
  }
  return count;
}

// refactored version

function charCount2(str) {
  let count = {};
  str = str.toLowerCase();
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      count[char] = count[char] + 1 || 1;
    }
  }
  return count;
}

// count should be and obj {a:1, b:3}
console.log(charCount("Hello oiuagsdfiOIUOIUGH"));
console.log(charCount2("Hello oiuagsdfiOIUOIUGH"));
