// 7 kyu - correct the time where the time is not valid


/* You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"   */

function timeCorrect(timestring) {
    // check for invalid input
    if (timestring === null || timestring === '') return timestring;
    if (!/^\d{2}:\d{2}:\d{2}$/.test(timestring)) {
        return null;
    }
    let arr = timestring.split(':').map(el => Number(el));
    let a = arr[0], b = arr[1], c = arr[2];
    let extra = 0;

    // check and correct seconds
    if (c > 59) {
        extra = Math.floor(c / 60);
        c = c % 60;
    }

    // check and correct minutes
    b += extra;
    extra = 0;
    if (b > 59) {
        extra = Math.floor(b / 60);
        b = b % 60;
    }

    // check and correct hours
    a += extra;
    if (a > 23) {
        a = a % 24;
    } else if (a < 0) {
        a = (a % 24) + 24;
    }

    // create a string with leading zeroes
    const format = (num) => (num < 10 ? '0' : '') + num;

    return `${format(a)}:${format(b)}:${format(c)}`;
}

console.log(timeCorrect("001122"))  //  null
console.log(timeCorrect("0a:1c:22"))  //  null 

console.log(timeCorrect("19:99:09"))  //  "20:39:09"
console.log(timeCorrect("19:99:99"))  //  "20:40:39"
console.log(timeCorrect("24:01:01"))  //  "00:01:01"
console.log(timeCorrect("52:01:01"))  //  "04:01:01"
