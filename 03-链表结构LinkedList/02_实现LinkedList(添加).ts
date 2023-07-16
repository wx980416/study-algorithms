class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }

  append(value: T) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  traverse() {
    const res: T[] = [];
    let current = this.head;
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    console.log(res.join('->'));
  }
}
const linkedList = new LinkedList<number>();
console.log(linkedList.length);
console.log(linkedList.head);
linkedList.append(1);
linkedList.append(2);
console.log(linkedList.length);
linkedList.traverse();

export {};
