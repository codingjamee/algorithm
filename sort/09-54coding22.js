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
