const stringifyNumbers = (inputObj) => {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj = { ...inputObj };
      newObj[key] = newObj[key].toString();
    } else if (typeof obj[key] === "object") {
      stringifyNumbers(obj[key]);
    } else {
      continue;
    }
  }
};

const inputObj = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66",
    },
  },
};

stringifyNumbers(inputObj);

const stringifyNumbers2 = (inputObj) => {
  const newObj = {};

  for (let key in inputObj) {
    if (typeof inputObj[key] === "number") {
      newObj[key] = inputObj[key].toString();
    } else if (
      typeOf(inputObj[key]) === "object" &&
      !Array.isArray(inputObj[key])
    ) {
      newObj[key] = stringifyNumbers2(inputObj[key]);
    } else {
      newObj[key] = inputObj[key];
    }
  }
  return newObj;
};
