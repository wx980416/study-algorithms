// 有效的括号: https://leetcode.cn/problems/valid-parentheses/
// 比如 ()[]{} 是有效的
// 比如 ([)] 是无效的

function isValid(s: string): boolean {
  // 长度为奇数，肯定是无效的
  if (s.length % 2 === 1) {
    return false;
  }

  const stack: string[] = [];
  // 知道循环次数使用 for
  for (let i = 0; i < s.length; i++) {
    const c = s[i]; // 取当前字符
    switch (c) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default: // 其他情况为右括号
        // 如果栈顶元素不等于当前字符
        if (stack.pop() !== c) {
          return false;
        }
        break;
    }
  }
  // 最后：如果栈为空，说明所有的左括号都有对应的右括号
  // 否则，说明有左括号没有对应的右括号
  return stack.length === 0;
}
console.log(isValid('()[]{}')); // true
console.log(isValid('([)]')); // false

// 字典优化
function isValidMap(s: string): boolean {
  // 长度为奇数，肯定是无效的
  if (s.length % 2 === 1) {
    return false;
  }

  const stack: string[] = [];
  const map: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // 知道循环次数使用 for
  for (let i = 0; i < s.length; i++) {
    const c = s[i]; // 取当前字符
    if (map[c]) {
      stack.push(map[c]);
    } else {
      if (stack.pop() !== c) {
        return false;
      }
    }
  }
  // 最后：如果栈为空，说明所有的左括号都有对应的右括号
  // 否则，说明有左括号没有对应的右括号
  return stack.length === 0;
}

export {};
