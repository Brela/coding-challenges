
/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any 
elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */


//need to create a function that checks the previous element in it's array, and push it to a new array if it does not match
//mine

var uniqueInOrder = function (iterable) {

    let arr = Array.from(iterable)
    let noDups = []

    arr.forEach((el, i) => {
        if (el !== arr[i - 1]) noDups.push(el)
    })
    return noDups
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))

// other solution

var uniqueInOrder2 = function (iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1])
}