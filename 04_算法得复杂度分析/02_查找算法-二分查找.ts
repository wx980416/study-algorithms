function binarySearch(arr: number[], num: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] > num) {
      right = middle - 1;
    } else if (arr[middle] < num) {
      left = middle + 1;
    }
  }

  return -1;
}

const index = binarySearch([1, 3, 5, 10, 100, 222, 333], 222);
console.log(index);

export default binarySearch;
