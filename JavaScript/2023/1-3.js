
// 8kyu : is animal allowed to feast

/* All of the animals are having a feast! Each animal is bringing one dish.There is just one rule: the dish must start and end with the same
letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether
 the beast is allowed to bring the dish to the feast. 

=====================================================================================================
my Plan: the strings will be lowercase, so and the first and last characters will be letters.
so, I will get the first char and last char of each and put them together, 
then, compare to get => true or false */

function feast(beast, dish) {
    beast = beast[0] + beast[beast.length - 1]
    dish = dish[0] + dish[dish.length - 1]
    return beast === dish
}

console.log(feast("great blue heron", "garlic naan"))