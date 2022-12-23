
/* You need to write a function that will format a phone number by a template.

Task
You're given number and string.

If there are more digits than needed, they should be ignored

if there are less digits than needed, should return Invalid phone number

Examples
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75" */

// MY SOLUTION

function formatNumber(number, template) {
    number = String(number)
    for (var i = 0; i < number.length; i++) {
        template = template.replace('#', number[i]);
    }
    if (template.includes('#')) return 'Invalid phone number'
    return template
}

console.log(formatNumber(79052479, "+# (###) ### ##-##"))

// OTHER SOLUTION

function formatNumber2(number, template) {
    let arrayNumber = number.toString().split("");
    for (let n of arrayNumber) {
        template = template.replace("#", n);
    }
    return /[#]/g.test(template) ? "Invalid phone number" : template;
}