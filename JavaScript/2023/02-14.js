// 8 kyu - is the string all uppercase

// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function (s) {
    return this == this.toUpperCase()
}
