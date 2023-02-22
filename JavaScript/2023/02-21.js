// 6 kyu - stacking boxes of gold

/* You are stacking some boxes containing gold weights on top of each other. If a box contains more weight than the box below it, it will crash downwards and combine their weights. e.g. If we stack [2] on top of [1], it will crash downwards and become a single box of weight [3].

[2]
[1] --> [3]
Given an array of arrays, return the bottom row (i.e. the last array) after all crashings are complete.

crashing_weights([[1, 2, 3],  --> [[1, 2,  ],      [[1,  ,  ],
                  [2, 3, 1],  -->  [2, 3, 4],  -->  [2, 2,  ],
                  [3, 1, 2]])      [3, 1, 2]]  -->  [3, 4, 6]]

therefore return [3, 4, 6] */

function crashingWeights(grid) {
    if (grid.length === 1) {
        if (grid[0].length === 1) {
            return [grid[0][0]];
        } else {
            return grid[0];
        }
    }
    for (let i = 0; i < grid.length - 1; i++) {
        for (let x = 0; x < grid[i].length; x++) {
            let boxAbove = grid[i][x]
            let boxBelow = grid[i + 1][x]
            if (i + 1 < grid.length && boxBelow && (boxAbove > boxBelow)) {
                grid[i + 1][x] += boxAbove
                grid[i][x] = ' '
            }
        }
    }
    return grid[grid.length - 1];
};
console.log(crashingWeights(
    [[1, 3, 3, 2, 2],
    [2, 2, 2, 2, 1],
    [4, 2, 6, 2, 1]]))  // [4, 7, 6, 2, 4]
console.log(crashingWeights(
    [[1, 2, 3], [2, 3, 1], [3, 1, 2]]))  // [1, 2, 3], [2, 3, 1], [3, 1, 2]
