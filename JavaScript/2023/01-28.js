// 6 kyu - convert to camel case


function toCamelCase(str) {
    str = str.split(/-|_/)
    for (let i = 1; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join('')
}

console.log(toCamelCase("the_stealth_warrior"))  // "theStealthWarrior"