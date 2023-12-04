// https://adventofcode.com/2023/day/1
var preContent = document.querySelector("pre").textContent;

(function getNumberOfPossibleGames(str) {
  // Assuming each game is separated by a new line
  var games = str.split("\n");

  games.forEach((game) => {
    let arrOfSubsets = getArrOfSubsets(game);
    console.log(arrOfSubsets);
  });
})(preContent);

function getArrOfSubsets(str) {
  var firstColonIndex = str.indexOf(":");
  var restOfString = str.substring(firstColonIndex + 1);
  var subsets = restOfString.split(";");

  return subsets.map((subset) => {
    const colors = subset.trim().split(", ");
    return colors.map((color) => {
      const [count, colorName] = color.split(" ");
      return { count: parseInt(count, 10), color: colorName };
    });
  });
}
