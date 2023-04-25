const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const collectStrings = (inputObj) => {
  let stringArray = [];
  for (let key in inputObj) {
    if (typeof inputObj[key] === "string") {
      stringArray.push(inputObj[key]);
    } else if (typeof inputObj[key] === "object") {
      stringArray = stringArray.concat(collectStrings(inputObj[key]));
    }
  }
  return stringArray;
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
