// 6 kyu : is `b` the same as `a` when each in `a` is squared

/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same"
elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here,
that the elements in b are the elements in a squared, regardless of the order.

Examples-
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] */

// My Plan: see if a = b after iterating through a and squaring each element, then sorting each

function comp(a1, a2) {
    if ([a1, a2].some(val => val == null || val == [])) return false
    const sorter = a => a.sort((a, b) => a - b)
    a1 = a1.map(n => n * n)
    return sorter(a1).join('') === sorter(a2).join('')
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]))
console.log(comp([], null))

// the .sort method in JS uses the `quicksort` algorithm, which has an average time complexity of O(n log n)
// Here is a revised version with time complexity O(n)

function comp1(a1, a2) {
    if ([a1, a2].some(val => val == null || val == [])) return false
    const setA2 = new Set(a2)
    for (let i = 0; i < a1.length; i++) {
        if (!setA2.has(a1[i] * a1[i])) return false
    }
    return true
}
