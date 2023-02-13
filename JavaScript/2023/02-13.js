// 6 kyu - count of duplicate chars

/* Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the 
input string. The input string can be assumed 
to contain only alphabets (both uppercase and lowercase) and numeric digits. */

/* My Plan:
- iterate through each char and slice the reamining items 
- then check if that slicced arr includes that char
 */
function duplicateCount(text) {
    let count = 0;
    let chars = {}
    text = text.toLowerCase().split('');
    text.forEach((el, i) => {
        if (text.slice(i + 1).includes(el)) {
            if (!chars[el]) {
                chars[el] = "duplicate"
                count += 1;
            }
        }
    });
    return count;
}

console.log(duplicateCount("aabbcde"))  // 2

/* What I did:
-> if the rest of the array contains the same char, then we use the nested if
-> to see if it was already found as a duplicate (by checking if it is a property of chars)
-> if the el is not a property then we make it one and increment count by 1 */