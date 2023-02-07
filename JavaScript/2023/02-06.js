// 7 kyu - longest combined pair in array

/* Assignment:
You are given an array(list) strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k consecutive strings taken in the array.
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" 
Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2 */

// 1st sol
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return '';
    let longest = '';
    for (let i = 0; i < strarr.length - k + 1; i++) {
        let current = strarr[i];
        for (let j = 1; j < k; j++) {
            if (i + j >= strarr.length) break;
            current = current.concat(strarr[i + j]);
        }
        if (current.length > longest.length) longest = current;
    }
    return longest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))  // "abigailtheta"

/* Improvements:
my solution above uses a nested loop whch has a time complexity of O(n^2)
To improve the time complexity, I need iterate though only one loop. I can do this using the .slice() method */

// 2nd sol
function longestConsec2(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return '';
    let longest = '';
    for (let i = 0; i < strarr.length - k + 1; i++) {
        let current = strarr.slice(i, i + k).join('');
        if (current.length > longest.length) longest = current;
    }
    return longest;
}

console.log(longestConsec2(["zone", "abigail", "theta", "form", "libe", "zas"], 2))  // "abigailtheta"

// we now have O(k) time complexity