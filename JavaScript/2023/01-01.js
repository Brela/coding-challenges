// highest scoring word

/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

// plan: split sentnce at spaces, then split each word at letters. use .map to turn letters into their values based on a find function on an array of letters
// then use reduce on each word to get the values, then sort array and pop the last one off to get the highest num
function high(x) {
    const alpha = '0abcdefghijklmnopqrstuvwxyz'.split('')
    let winningWord = ''
    let winningWordsValue = 0
    x.split(' ')
        .forEach(word => {
            let currentValue = (
                word.split('')
                    .map(letter => letter = alpha.indexOf(letter))
                    .reduce((prev, curr) => prev + curr, 0)
            )
            if (currentValue > winningWordsValue) {
                winningWordsValue = currentValue
                winningWord = word
            }
        })

    return winningWord
}
console.log(high('let us go to the park tody to use the traxxas and test'))