function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr;
}