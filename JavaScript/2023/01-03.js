
/*=====================================================================================================
#1 6kyu : Delete occurrences of an element if it occurs more than n times.

Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21]. 

---------------------------------------------------------------------------------------------------------------
*/
// I'm going to create a function that iterates over each item, creating a counter for each number that is in an object.
// the number will be the property name and the value will be the counter

function deleteNth(arr, n) {
    let newArr = []
    // Create an object to store the count for each element
    let counter = {}
    arr.forEach(item => {
        // if the item being checked is alreay defined as a property of the counter object, then add one to it
        // otherwise, it is not defined ('||'), and make it 1
        counter[item] = counter[item] + 1 || 1
        console.log(counter[item])
        // only push to the newArray if the counter is below or equal to the max (n)
        if (counter[item] <= n) newArr.push(item)
    })
    return newArr
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3))
console.log(deleteNth([20, 37, 20, 21], 1))



/*=====================================================================================================
#2   8kyu : is animal allowed to feast

 All of the animals are having a feast! Each animal is bringing one dish.There is just one rule: the dish must start and end with the same
letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether
 the beast is allowed to bring the dish to the feast. 

---------------------------------------------------------------------------------------------------------------
my Plan: the strings will be lowercase, so and the first and last characters will be letters.
so, I will get the first char and last char of each and put them together, 
then, compare to get => true or false */

function feast(beast, dish) {
    beast = beast[0] + beast[beast.length - 1]
    dish = dish[0] + dish[dish.length - 1]
    return beast === dish
}

console.log(feast("great blue heron", "garlic naan"))
