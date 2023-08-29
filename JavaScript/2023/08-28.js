/* 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

*/

var longestCommonPrefix = function (strs) {
  // current longest starts as first in array
  currentLongest = strs[0];
  strs.forEach((str) => {
    let i = 0;

    // Loop through each character of the current string
    for (; i < Math.min(str.length, currentLongest.length); i++) {
      if (str[i] !== currentLongest[i]) {
        break;
      }
    }

    // Slice currentLongest up to the point of divergence
    currentLongest = currentLongest.slice(0, i);
  });

  return currentLongest;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
