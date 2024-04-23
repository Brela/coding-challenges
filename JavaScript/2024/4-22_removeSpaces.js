function removeSpaces(str) {
  let result = str
    .split("")
    .filter((char) => char !== " ")
    .join("");
  console.log(result);
  return result.length === str.length ? "None found" : result;
}

removeSpaces("hell ow orld");
