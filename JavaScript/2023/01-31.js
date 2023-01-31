// 7 kyu - get the middle char(s)

// Return the middle character(s) of a word

function getMiddle(s) {
    const len = s.length
    return len % 2 === 0 ? `${s[len / 2 - 1]}${s[len / 2]}` : s[Math.floor(len / 2)]
}