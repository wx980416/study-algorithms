import sequentSearch from './01_查找算法-顺序查找';
import binarySearch from './02_查找算法-二分查找';

const TIME = 100000000;
const arr = new Array(TIME).fill(0).map((_, index) => index);
const num = TIME / 2;

const startTime = performance.now();
const index = sequentSearch(arr, num);
const endTime = performance.now();
console.log(`顺序查找，位置：${index}，耗时：${endTime - startTime}ms`);
console.log('--------------------------------------');
console.log(
  `二分查找，位置：${binarySearch(arr, num)}，耗时：${
    performance.now() - endTime
  }ms`,
);

export {};
