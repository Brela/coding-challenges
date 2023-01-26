// 6 kyu - calculate a person's single rep max weigth given the current weight and reps

/* 
You just got done with your set at the gym, and you are wondering how much weight you could lift 
if you did a single repetition. Thankfully, a few scholars have devised formulas for this purpose (from WikipediaL: https://en.wikipedia.org/wiki/One-repetition_maximum) :
Epley - McGlothin - Lombardi
return the larget number of the 3 formulas
*/

function calculate1RM(w, r) {
    if (r === 0) return r;
    if (r === 1) return w;
    const epley = _ => { return w * (1 + (r / 30)) }
    const mcGlothin = _ => { return (100 * w) / (101.3 - (2.67123 * r)) }
    const lombardi = _ => { return w * (Math.pow(r, 0.10)) }
    const solutions = [epley(), mcGlothin(), lombardi()]
    return Math.round(Math.max(...solutions))
}

console.log(calculate1RM(135, 20)) // 282
console.log(calculate1RM(200, 8)) // 253

/*     WHAT I DID:
1st, I return r if the rep is 0 or 1
next, I create a function expression for each of the three scholars' equations
then I create an array of each of the equations, where each element calls it's function
last, I return the largest solution with Math.max and round it with Math.round
The spread is used on the solutions array in the return line because each array element calls a function,
the spread is necessary so that the functions complete before it acesses the values
 */