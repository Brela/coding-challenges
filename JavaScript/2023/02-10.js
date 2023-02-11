// 8 kyu - distance between two points on grid

/* Assignment:
Point objects have attributes x and y.
Write a function calculating distance between Point a and Point b. */

function distanceBetweenPoints(a, b) {
    const y = a.x - b.x;
    const x = a.y - b.y;
    return Math.sqrt(x * x + y * y);
}