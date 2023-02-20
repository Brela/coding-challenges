// 7 kyu - cap first letter of each word

/* Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith,
 but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */

String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
}
console.log("everytime we touch".toJadenCase())