
//  valid parentheses    5kyu

/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
he function should return true if the string is valid, and false if it's invalid..

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 

my plan: 
-- iterate through string with a for(const --- of ---)=> if the element being checked is an opening parenth, 
-- add it to a counter => if it is a closing parenth reduce the original count by 1 =>  lastly - if counter is 0, then the set is vaild -> retun true


-- my solution:                       */
function validParentheses(parSet) {
    let openingParenthsCounter = 0;
    for (const par of parSet) {
        if (par === '(') {
            openingParenthsCounter += 1;
        } else if (par === ')') {
            if (openingParenthsCounter === 0) {
                return false;
            } else {
                openingParenthsCounter -= 1;
            }
        }
    }
    return openingParenthsCounter === 0;
}

console.log(validParentheses("(())((()())())"))  //  true
console.log(validParentheses('())'))  //  false