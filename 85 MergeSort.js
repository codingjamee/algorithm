function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let sortedArray = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i])
      i++
    } else {
      sortedArray.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    sortedArray.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j])
    j++
  }

  return sortedArray;
}