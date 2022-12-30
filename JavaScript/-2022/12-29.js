/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
 We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases. */

// My plan is to create a variable for the length of the array of names,
// Then, I will cerate an if statement for each like scenario and an equation for the last one

//My solution
function likes(names) {
    let lengthN = names.length
    let likeStatement;
    if (lengthN === 0) likeStatement = "no one likes this"
    if (lengthN === 1) likeStatement = `${names} likes this`
    if (lengthN === 2) likeStatement = `${names[0]} and ${names[1]} like this`
    if (lengthN === 3) likeStatement = `${names[0]}, ${names[1]} and ${names[2]} like this`
    if (lengthN >= 4) likeStatement = `${names[0]}, ${names[1]} and ${lengthN - 2} others like this`
    return likeStatement
}

console.log(likes(["Jacob"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Clay"]))