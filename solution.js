let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(inputObj) {
  var newObj = {};
  for (var key in inputObj) {
    if (typeof inputObj[key] === "number") {
      newObj[key] = inputObj[key].toString();
    } else if (
      typeof inputObj[key] === "object" &&
      !Array.isArray(inputObj[key])
    ) {
      newObj[key] = stringifyNumbers(inputObj[key]);
    } else {
      newObj[key] = inputObj[key];
    }
  }
  return newObj;
}

console.log(stringifyNumbers(obj));
