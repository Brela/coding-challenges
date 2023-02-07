// 6 kyu - bouncy ball bounce counter

/* Assignment:
A ball is dropped out of a window at given heigth (h). 
How many times will it pass by a point that is (window) meters off the ground, given the (bounce) rate. */

function bouncingBall(h, bounce, window) {
    if (h <= 0 || (bounce <= 0 || bounce >= 1) || window >= h) return -1;
    let seen = 0
    while (h > window) {
        seen += 1
        h *= bounce
        if (h > window) seen += 1
    }
    return seen
}

console.log(bouncingBall(30.0, 0.66, 1.5)) // 15