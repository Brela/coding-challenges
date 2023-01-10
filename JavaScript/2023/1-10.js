function count(str) {
    let sett = {}

    str.split('').forEach(el => {
        sett[el] = sett[el] ? sett[el] + 1 : 1;
    })
    return sett
}
console.log(count('asdfaaa'))

