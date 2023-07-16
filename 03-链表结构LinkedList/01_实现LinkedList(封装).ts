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
}
const linkedList = new LinkedList<number>();
console.log(linkedList.length);
console.log(linkedList.head);

export {};
