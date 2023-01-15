// 6 kyu: Duplicate Encoder

/* The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only once in the original
 string, or ")" if that character appears more than once in the original 
 string. Ignore capitalization when determining if a character is a duplicate. */

// my plan: reuse the function I used in 01-12.js, where I iterate through the array and create an object of the counters.
// Except now, if the count is more than one, I need to go back and find that 1st value to change it. 
// I will do this by running another iteration with a .map that changes the letter to a '(' if the obj[letter] = 1 and ')' if it is greater than 1

// MINE
// Time complexity - O(n) - where n is the length of the input string. In the worst case scenario, each operation is performed once for each character
function duplicateEncode(str) {
    let arr = str.split('');
    let obj = {};
    arr.forEach((letter) => {
        obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
    });
    arr = arr.map((letter) => {
        return obj[letter] > 1 ? ')' : '(';
    });
    return arr.join('');
}

console.log(duplicateEncode("recede") + " ---- " + "()()()");


// Someone else's solution using indexOf() and comparing it to .lastIndexOf()
function duplicateEncode2(word) {
    var unique = '';
    word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
            unique += '(';
        }
        else {
            unique += ')';
        }
    }
    return unique;
}