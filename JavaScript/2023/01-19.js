// 5 kyu - Calculating with Functions

/* Write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy */

/* The Plan: This one is a bit tricky because the desired output format requires the name of each function to be included in the
 operation. As a result, we must hardcode the first part of the operation in each function. Additionally, we need to take into 
 account that the functions named as numbers will have one of two tasks: they will either return a number or, if there is a parameter, 
 perform the operation using the parameter as the operator and the second number in the operation. I will begin by working backwards, 
 starting with the innermost function that calls the corresponding function's name. 
 Since I cannot return an operator as an operator, I will return it as a string then use eval() in the final function*/

function zero(o) { return !o ? 0 : Math.floor(eval(0 + o)) }
function one(o) { return !o ? 1 : Math.floor(eval(1 + o)) }
function two(o) { return !o ? 2 : Math.floor(eval(2 + o)) }
function three(o) { return !o ? 3 : Math.floor(eval(3 + o)) }
function four(o) { return !o ? 4 : Math.floor(eval(4 + o)) }
function five(o) { return !o ? 5 : Math.floor(eval(5 + o)) }
function six(o) { return !o ? 6 : Math.floor(eval(6 + o)) }
function seven(o) { return !o ? 7 : Math.floor(eval(7 + o)) }
function eight(o) { return !o ? 8 : Math.floor(eval(8 + o)) }
function nine(o) { return !o ? 9 : Math.floor(eval(9 + o)) }

function plus(n) { return '+' + n }
function minus(n) { return '-' + n }
function times(n) { return '*' + n }
function dividedBy(n) { return '/' + n }


console.log(seven(times(five()))) // 35