/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters
 of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]] */

const groupAnagrams = function (strs) {
  const group = {};

  strs.forEach((str) => {
    strKey = str.split("").sort().join(""); // strKey is simply sorted to find if is anagram
    group[strKey] ? group[strKey].push(str) : (group[strKey] = [str]);
  });

  const groupedArrs = [].concat(Object.values(group));
  console.log(groupedArrs);
  return groupedArrs;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
