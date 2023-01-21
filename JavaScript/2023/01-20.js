// 5 kyu - pig latin

/*          Assignment:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !                                                                       
*/

function pigIt(str) {
    return str.split(' ').map(word => {
        return word.slice(1)
            .concat(word[0], 'ay')
    }).join(' ')

}

console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay')

/*         What I did:
After splitting the sentence at each space, I used the array's .map method (being passed down to my array through prototypal inheritance) to transform each word.
At each words iteration, the function begins by slicing the word from index 1 to the end,
Then, it uses .concat() to add the first letter from the word and 'ay' to to the end of the word
*/

/*         What I Learned:
I learned that implicit return doesn't always work for arrow functions (like I thought they did).
They only work if you have a single input or a simple transformation
In this case, I needed an explicit return because the function does more than a simple opearation. 
*/