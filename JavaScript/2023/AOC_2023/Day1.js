// https://adventofcode.com/2023/day/1
var preContent = document.querySelector("pre").textContent;

function sumAllFristAndLastDigits(str) {
  var arr = str.split(/[ \n]+/);
  let total = 0;
  arr.forEach((line) => {
    // console.log(line);
    const num = getFirstAndLastDigits(line);
    if (num) {
      //   console.log("num:", num);
      total += Number(num);
      //   console.log(total);
    }
  });

  function getFirstAndLastDigits(line) {
    let firstDigit = null;
    let secondDigit = null;

    for (let i = 0; i < line.length; i++) {
      let currentChar = Number(line[i]);

      // check word first and if word is found track the index
      if (!isNaN(currentChar)) {
        if (firstDigit === null) {
          firstDigit = currentChar;
        }
        secondDigit = currentChar;
      }

      // check here
    }

    if (firstDigit !== null && secondDigit !== null) {
      //   console.log("First Digit: ", firstDigit);
      //   console.log("Last Digit: ", secondDigit);
      return String(firstDigit) + secondDigit;
    }
    return 0;
  }

  return total;
}

console.log(sumAllFristAndLastDigits(preContent));
// sumAllFristAndLastDigits("1abc2 pqr3stu8vwx a1b2c3d4e5f treb7uchet");
