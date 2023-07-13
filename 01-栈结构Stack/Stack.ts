interface IStack<T> {
  push(e: T): void;
  pop(): T | undefined;
  peek(): T;
  isEmpyt(): boolean;
  size(): number;
}

// implements: 实现接口, 一个类可以实现多个接口
class ArrayStack<T> implements IStack<T> {
  private data: T[] = []; // private: 私有属性，只能在类内部访问

  // push 方法：将一个元素压入到栈中
  push(e: T) {
    this.data.push(e);
  }

  // pop 方法：从栈中取出一个元素
  pop(): T | undefined {
    return this.data.pop();
  }

  // peek 方法：查看栈顶元素
  peek(): T {
    return this.data[this.data.length - 1];
  }

  // isEmpyt 方法：判断栈是否为空
  isEmpyt(): boolean {
    return this.data.length === 0;
  }

  // size 方法：返回栈中元素的个数
  size(): number {
    return this.data.length;
  }
}

// 测试样例
// const s1 = new ArrayStack<string>();
// s1.push('1');
// s1.push('2');
// s1.push('3');

// console.log(s1.peek());
// console.log(s1.pop());
// console.log(s1.peek());
// console.log(s1.size());
// console.log(s1.isEmpyt());
// const res = s1.pop();
// res?.split('');

export { ArrayStack };
