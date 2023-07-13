// 创建 Node 节点类
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
// 链表常见操作:
class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  // 追加节点
  append(value: T) {
    // 1.创建节点
    const newNode = new Node(value);

    // 2.将节点添加到链表中
    if (!this.head) {
      this.head = newNode;
    } else {
      // 找到最后一个节点，将其 next 指向新节点
      // 需要一个变量来保存遍历的节点
      let current = this.head;
      // 因为不知道遍历的次数,所以使用 while 循环
      while (current.next) {
        // 如果 current.next 不为 null，说明不是最后一个节点
        current = current.next;
      }

      // 此时 current 就是最后一个节点
      current.next = newNode;
    }

    // 最后更新 size
    this.size++;
  }

  // 遍历链表
  traverse() {
    const result: T[] = [];
    // 需要一个变量来保存遍历的节点
    let current = this.head;
    // 因为是找节点的值,所以 while 条件是 current
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    // join 方法可以将数组转换为字符串
    console.log(result.join('->'));
  }

  // 插入节点
  insert(value: T, position: number): boolean {
    // 1.判断 position 是否越界
    if (position < 0 || position > this.size) return false;

    const newNode = new Node(value);

    // 2.判断插入的位置是否是第一个
    if (position === 0) {
      // 2.1 将新节点的 next 指向原来的 head
      newNode.next = this.head;
      // 2.2 将 head 指向新节点
      this.head = newNode;
    } else {
      // 双指针法
      let index = 0; // 用来记录遍历的位置
      let current = this.head; // 用来保存遍历的节点
      let previous: Node<T> | null = null; // 用来保存前一个节点
      while (index < position && current) {
        previous = current;
        current = current.next;
        index++;
      }
      // 退出循环时, current 就是 position 位置的节点
      // 将新节点的 next 指向 current, 就算插入了
      newNode.next = current;
      // 但是此时不知道前一个节点是谁,所以需要一个变量 previous 来保存
      previous!.next = newNode;
    }

    this.size++;
    return true;
  }

  // 获取链表长度 get: 只读属性, 只能获取,不能修改
  get length() {
    return this.size;
  }
}

const linkedList = new LinkedList<string>();
// console.log(linkedList.length);
linkedList.append('aaa');
linkedList.append('bbb');
linkedList.append('ccc');
linkedList.append('ddd');
linkedList.insert('abc', 0);
linkedList.traverse();
linkedList.insert('cba', 2);
linkedList.insert('nba', 6);
linkedList.traverse();
export {};
