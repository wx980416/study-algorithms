class LinkNode {
  val: number;
  next: LinkNode | null;
  constructor(val: number, next: LinkNode | null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  private head: LinkNode | null = null;
  private size: number = 0;

  get(index: number): number {
    // 索引是 0123
    // size是 1234，类似于数组的length，所以这里是index >= this.size
    if (index < 0 || index >= this.size) return -1;
    const node = this.getNode(index);
    return node ? node.val : -1;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    const node = new LinkNode(val, null);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current?.next) {
        current = current.next;
      }
      current!.next = node;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;
    const node = new LinkNode(val, null);
    if (index === this.size) return this.addAtTail(val);
    if (index === 0) {
      if (!this.head) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    } else {
      const current = this.getNode(index);
      const previous = this.getNode(index - 1);
      if (previous) {
        node.next = current;
        previous.next = node;
      }
    }
    this.size++;
    return;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;
    const current = this.getNode(index);
    if (index === 0) {
      this.head = current?.next || null;
    } else {
      const previous = this.getNode(index - 1);
      if (previous) {
        previous.next = current?.next || null;
      }
    }
    this.size--;
    return;
  }

  // i < index 所以是肯定能找到值得，并且不会找 i=index的值
  // 比如 1-2-3-null  此时size是3，如果要找到index=2的值，索引0-1，1-2，2-3，3-null，所以i<index
  getNode(index: number): LinkNode | null {
    let current = this.head;
    let i = 0;
    while (i < index && current) {
      current = current.next;
      i++;
    }
    return current;
  }

  traverse() {
    const res: number[] = [];
    let current = this.head;
    while (current) {
      res.push(current.val);
      current = current.next;
    }
    console.log(res.join('->'));
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(2);
myLinkedList.deleteAtIndex(1);
myLinkedList.addAtHead(2);
myLinkedList.addAtHead(7);
myLinkedList.addAtHead(3);
myLinkedList.addAtHead(2);
myLinkedList.addAtHead(5);
myLinkedList.addAtTail(5);
myLinkedList.traverse();
console.log(myLinkedList.get(5));

// myLinkedList.addAtIndex(1, 2); // 链表变为 1->2->3
// myLinkedList.traverse();
// console.log(myLinkedList.get(1)); // 返回 2
// myLinkedList.deleteAtIndex(1); // 现在，链表变为 1->3
// myLinkedList.traverse();
// console.log(myLinkedList.get(1));

export {};
