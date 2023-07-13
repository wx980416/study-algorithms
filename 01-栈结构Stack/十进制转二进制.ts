import { ArrayStack } from './Stack';

// 十进制转二进制: 除2取余法 先取余入栈最后再出栈
// 比如 35 转二进制
// 35 % 2 = 1
// 17 % 2 = 1
// 8 % 2 = 0
// 4 % 2 = 0
// 2 % 2 = 0
// 1 % 2 = 1
// 最后结果则为：101011
function decimalToBinary(decNumber: number): string {
  const stack = new ArrayStack<number>();
  let number = decNumber;
  // whlle：如果不确定循环条件使用 while
  // for: 如果确定循环次数使用 for
  while (number > 0) {
    const result = number % 2; // 余数
    stack.push(result); // 入栈
    number = Math.floor(number / 2); // 商
  }

  let binaryString = '';
  // 依次出栈结果则为二进制
  while (!stack.isEmpyt()) {
    binaryString += stack.pop();
  }
  return binaryString;
}

console.log(decimalToBinary(35)); // 101011
console.log(decimalToBinary(100));
export {};
