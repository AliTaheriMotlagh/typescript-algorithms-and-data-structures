import { LinkListWithTail } from "./linklist-with-tail";

class LinkedLisStack {
  list: LinkListWithTail;
  constructor() {
    this.list = new LinkListWithTail();
  }

  push(value: any) {
    this.list.prepend(value);
  }

  pup() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.data;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const lls = new LinkedLisStack();
lls.push(10)
lls.push(20)
lls.push(30)
lls.print()