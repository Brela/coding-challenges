// 7kyu : count letters.

function count(str) {
    let sett = {}

    str.split('').forEach(el => {
        sett[el] = sett[el] ? sett[el] + 1 : 1;
    })
    return sett
}
console.log(count('asdfaaa'))




// 7kyu : check for isogram

// mine

function isIsogram(str) {
    str = str.toLowerCase().split('')
    let isogram = true;
    console.log(str)
    str.forEach((letter, i) => {
        if ((str.filter(el => el === letter)).length > 1) isogram = false
    })
    return isogram;
}

console.log(isIsogram('abdf'))
console.log(isIsogram('mravxudwqfcnzpgljnt'))


// simplified solution
function isIsogram1(str) {
    return new Set(str.toUpperCase()).size == str.length;
}