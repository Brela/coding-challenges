
/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */

// the plan is to use find to get the first '#', then remove that element and the previous one with splice

function cleanString(str) {
    let s = str.split('')
    while (s.includes('#')) {
        let hash = s.indexOf('#')
        console.log(hash)
        s.splice(hash - 1, 2)
    }
    return s.join('')
}

console.log(cleanString('abc#d##c'))
console.log(cleanString("#######"))
console.log(cleanString("a#abcs##"))
console.log(cleanString("abc##d######"))