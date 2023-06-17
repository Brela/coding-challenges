/* Given a string that includes alphanumeric 
characters ("3a4B2d") return the expansion of
that string:
 The numeric values represent the occurrence of each letter preceding that numeric value.
 There should be no numeric characters in the final string.
 */

function stringExpansion(str) {
    // initialize a number num to 1 (this will be used as the default repeat count if no numbers are present) 
    let num = 1;
    let result = '';
    // If the current character is a number, we update num. If it's not a number (i.e., it's a letter), 
    //we append it to result, repeated num times. Finally, we return the result.
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            num = Number(str[i]);
        } else {
            result += str[i].repeat(num);
        }
    }

    return result;
}
