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

  insert(value: T, position: number) {
    const node = new Node(value);

    if (position < 0 || position > this.size) return false;

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous: Node<T> | null = null;
      let index = 0;
      while (index < position && current) {
        previous = current;
        current = current.next;
        index++;
      }
      node.next = current;
      if (previous) {
        previous.next = node;
      }
    }
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
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.traverse();
linkedList.insert(4, 2);
linkedList.traverse();

export {};
