const nestedEvenSum = (inputObject, evenSum = 0) => {
  const newArray = [];
  const objValues = Object.values(inputObject);

  for (i = 0; i < objValues.length; i++) {
    if (typeof objValues[i] === "object") {
      // console.log(newArray.concat(nestedEvenSum(objValues[i])));
      newArray.concat(objValues[i]);
      return newArray.concat(nestedEvenSum(objValues[i]));
    } else {
      newArray.push(objValues[i]);
      if (objValues[i] % 2 === 0) {
        evenSum += objValues[i];
      }
    }
  }

  return newArray, evenSum;
};

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2);
