// 5kyu: human readable time

/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in
a human-readable format (HH:MM:SS).

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */


// My plan:
// Write equation for each time sectio
// -> create a function for making each digit 2 chars so that they are in the proper format

function humanReadable(seconds) {
    // 60 (seconds in mins) * 60 (mins in hour) = 3600 seconds in  an hour
    // hours = seconds / seconds in an hour
    let hours = Math.floor(seconds / 3600)

    let mins = Math.floor(seconds % 3600 / 60)

    let secs = seconds % 3600 % 60

    function getFormat(hh, mm, ss) {
        function makeTwoChars(time) {
            return String(time).length === 2 ? time : '0' + time
        }
        return [makeTwoChars(hh), ':', makeTwoChars(mm), ':', makeTwoChars(ss)].join('')
    }
    return getFormat(hours, mins, secs)
}

console.log(humanReadable(3700))