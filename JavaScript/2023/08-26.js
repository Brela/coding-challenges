var singleNumber = function (nums) {
  let collectionOfNums = [];
  nums.forEach((num, i) => {
    collectionOfNums[num] = collectionOfNums[num]
      ? collectionOfNums[num] + 1
      : 1;
  });
  console.log(collectionOfNums);
  let onlyOne;
  collectionOfNums.forEach((num, i) => {
    if (collectionOfNums[num] === 1) {
      onlyOne = num;
    }
  });
  return onlyOne;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
