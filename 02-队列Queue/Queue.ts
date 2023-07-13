interface IQueue<T> {
  // 入队
  enqueue(item: T): void;
  // 出队
  dequeue(): T | undefined;
  // 队首
  peek(): T | undefined;
  //是否为空
  isEmpty(): boolean;
  // 大小
  size(): number;
}

class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = [];
  enqueue(item: T): void {
    this.data.push(item);
  }
  dequeue(): T | undefined {
    return this.data.shift();
  }
  peek(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  size(): number {
    return this.data.length;
  }
}
// 测试用例
const queue = new ArrayQueue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size()); // 3
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.isEmpty()); // true

export default ArrayQueue;
