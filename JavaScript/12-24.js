
// return the filtered list where the typeof el is number, others are removed automatically

function filter_list(l) {
    return l.filter(el => typeof el === 'number')
}

console.log(filter_list([1, 2, 'a', 'b']))