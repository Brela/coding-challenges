// 7 kyu - remove consecutive duplicate words

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.

// my plan: iterate though array backwards so that when I use splice to remove the duplicates it does not offset the index positions
const removeConsecutiveDuplicates = s => {
    s = s.split(' ')
    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] == s[i - 1]) {
            s.splice(i, 1)
        }
    }
    return s.join(' ')
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) //'alpha beta gamma delta alpha beta gamma delta')


// simpler version by others
const removeConsecutiveDuplicates2 = s => s.split(" ").filter((x, i, arr) => x != arr[i - 1]).join(" ");