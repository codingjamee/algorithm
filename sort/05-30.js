const sumZero = (array) => {
  const first = Number(array[0]);
  for (let i = 0; i < array.length; i++) {
    const second = array[i];
    if (second + first === 0) {
      console.log(first, second);
      return;
    }
  }
};

sumZero([-3, -2, -1, 0, 1, 2, 3]);
