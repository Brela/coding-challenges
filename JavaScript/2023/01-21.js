// 8 kyu - remove first and last char

/* Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string */

function removeChar(str) {
    return str.slice(1, - 1)
};

console.log(removeChar('eloquent')) // 'loquen'


