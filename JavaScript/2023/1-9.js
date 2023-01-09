// 5kyu : improve directions

/* Write a function dirReduc which will take an array of strings
 and returns an array of strings with the needless directions
  removed (W<->E or S<->N side by side). */


// The plan: iterate over the array multiple times, while removing any pairs of opposites.
// if there are no opposites left, return the stack   

function dirReduc(arr) {
    let directionsAreOpposites = function (currentDirection, nextDirection) {
        let opposites = { NORTH: 'SOUTH', EAST: 'WEST', SOUTH: 'NORTH', WEST: 'EAST' }
        if (opposites[currentDirection] === nextDirection) return true;
        else return false;
    }

    firstRecursiveFunc()
    function firstRecursiveFunc() {
        arr.forEach((direction, i) => {
            console.log('checking ' + direction + ' to equal ' + arr[i + 1])
            if (directionsAreOpposites(direction, arr[i + 1])) {
                arr.splice(i, 2) // if they are opposites, remove them and call the function again
                firstRecursiveFunc()
            }
        });
    }
    return arr;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

// Note to self: I was having trouble with the function returning undefined because under the if in the forEach statement,
// I was returning the arr there in an else statement. The else was too far removed from the function.
// The return for the main function has to be directly inside of it for it to work

// Time complexity: O(n^2) because the function iterates of the array multiple times until it reaches the desired result

// Plan to make this function O(n)
// My plan: create an object of the opposites in key value pairs
// I want to achieve O(n) time complexity, so I will iterate through the array once. 
// I will create a variable for a stack, and iterate thought the array to heck if the last item in the stack is an opposite to
// the next item it is checking from the array

function dirReduc1(arr) {
    let opposites = { NORTH: 'SOUTH', EAST: 'WEST', SOUTH: 'NORTH', WEST: 'EAST' }
    let stack = []

    for (const direction of arr) {
        if (stack.length > 0 && stack[stack.length - 1] === opposites[direction]) {
            stack.pop()
        } else {
            stack.push(direction)
        }
    }

    return stack
}

console.log(dirReduc1(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

