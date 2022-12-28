// INSTRUCTIONS ->

/* Let’s assume that when you register a car you are assigned two numbers:

Customer ID – number between 0 and 17558423 inclusively. It is assigned to car buyers in the following order: the first customer receives an ID of 0, the second customer receives an ID of 1, the third - 2, and so on;

A Number Plate – 6-character combination composed of the series - three Latin lowercase letters from a to z; and the serial number - three digits from 0 to 9. Example: aaa001, xyz123, tok469;

Each Number Plate is related to the given Customer ID. For example:

Customer ID of 0: aaa001

Customer ID of 21: aaa022

Customer ID of 169: aaa170

Your Task
Write a function
findTheNumberPlate

which takes the Customer ID as an argument, calculates the Number Plate corresponding to this ID and returns it as a string;

Rules
The serial number changes first. For each 3-letter series it goes through 001 to 999, such as: aaa001, aaa002, aaa003, ......, aaa998, aaa999

The leftmost letter in the series switches alphabetically each time after the serial number has moved through 001 to 999 inclusively;

aaa001...aaa999
at this point the leftmost letter will switch alphabetically, while the serial number repeats the same cycle again;

baa001...baa999,
...... ,
zaa001...zaa999
The middle letter switches alphabetically each time after the leftmost letter has moved through a to z and the z** series has moved through 001 to 999.

zaa001...zaa999
at this point the middle letter will switch alphabetically, while the leftmost letter and the serial number repeat the same cycle again;

aba001...aba999,
bba001...bba999,
......,
zza001...zza999
The rightmost letter switches alphabetically each time after the middle letter has moved through a to z and the zz* series has moved through 001 to 999.

zza001...zza999
at this point the rightmost letter will switch alphabetically, while the middle letter, the leftmost letter, and the serial number repeat the same cycle again;

aab001...aab999,
bab001...bab999,
......,
zab001...zab999,
abb001...abb999,
bbb001...bbb999,
......,
zbb001...zbb999,
acb001...acb999,
......, 
zzz001...zzz999
Note
If the serial number has less than 3 digits, the missing places should be adjusted with zeroes.
i.e: 12 should equal 012; 4 should equal 004.

Once again, the customer ID starts with 0, LIKE AN ARRAY

tests:
[1487,'baa489'],
              [40000,'oba041'],
              [17558423,'zzz999'],
              [234567,'aja802'],
              [43056, 'rba100']]


 */


//


function findTheNumberPlate(ID) {

    if (ID.toString().length === 1) return "aaa00" + (ID + 1)
    if (ID.toString().length === 2) return "aaa0" + (ID + 1)

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'  // 0-25  // 000 IDs correlate to a, 1000s -> b
    // DIVIDE THE ID BY 1000 
    let letterIterations = Math.floor(ID / 1000)


    // ADJUST LETTERS HERE WITH SOME COMPLICATED MATH EQUATIONS

    const l1 = alphabet[Math.floor(ID / (26 * 26 * 999))]
    const l2 = alphabet[Math.floor(ID % (26 * 26 * 999) / (26 * 999))]
    const l3 = alphabet[Math.floor(ID % (26 * 999) / 999)]
    console.log(l1, l2, l3)


    // THE REMAINDER WILL BE THE 3 DIGIT NUMBER
    let threeDigNum = String(ID % 1000 + 1)
    // ADD 1 TO THE FINAL NUMBER PER INSTRUCTIONS
    return l1 + l2 + l3 + threeDigNum
}

//async/ await practice

async function runNext1() {
    console.log('test  ' + findTheNumberPlate(7))
    console.log('\n')
}
async function runNext2() {
    await runNext1()
    console.log('test  ' + findTheNumberPlate(25100))
    console.log('\n')
}
async function runNext3() {
    await runNext2()
    console.log('test  ' + findTheNumberPlate(26567))
    console.log('\n')
}

runNext3()
