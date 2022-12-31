
//       #1
/* Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1; */

// my plan is to run a fore each on the array checking each element like so => check the length, 
//then check each char to be this or that depending on length

// MINE
function countSmileys(arr) {
    let validSmileys = 0
    arr.forEach(el => {
        if (el.length === 2) {
            if ((el[0] === ':' || el[0] === ';')
                && (el[1] === ')' || el[1] === 'D')) validSmileys += 1
        }
        if (el.length === 3) {
            if ((el[0] === ':' || el[0] === ';')
                && (el[1] === '-' || el[1] === '~')
                && (el[2] === ')' || el[2] === 'D')) validSmileys += 1
        }

    })
    return validSmileys
}

// console.log(countSmileys([':)', ';(', ';}', ':-D']))
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']))

// someone's regex solution - cool
function countSmileys2(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}



