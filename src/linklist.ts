class NodeLinkList {
  data: any;
  next: NodeLinkList;
  constructor(value: any) {
    this.data = value;
    this.next = null;
  }
}

class LinkList {
  head: NodeLinkList;
  size: number;
  constructor() {
    this.size = 0;
    this.head = null;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  reverse() {
    let previous: NodeLinkList = null,
      current = this.head,
      next = this.head.next;
    while (next) {
      current.next = previous;
      previous = current;
      current = next;
      next = next.next;
    }
    current.next = previous;
    this.head = current;
  }

  removeFrom(index: number) {
    if (this.isEmpty() || index >= this.size || index < 0) {
      return null;
    }
    let removedItem: NodeLinkList;
    if (index === 0) {
      removedItem = this.head;
      this.head = this.head.next;
      this.size--;
      return removedItem;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedItem = prev.next;
      prev.next = removedItem.next;
      this.size--;
      return removedItem;
    }
  }

  removeValue(value: any) {
    if (this.isEmpty()) {
      return null;
    }
    let removedItem = this.head;
    if (this.head.data === value) {
      this.head = this.head.next;
      this.size--;
      return removedItem;
    } else {
      let prev: NodeLinkList;
      for (let index = 0; index < this.size; index++) {
        if (removedItem.data === value) {
          break;
        }
        prev = removedItem;
        removedItem = removedItem.next;
      }
      if (removedItem) {
        prev.next = removedItem.next;
        this.size--;
        return removedItem;
      } else {
        return null;
      }
    }
  }

  search(value: any) {
    if (this.isEmpty()) {
      return -1;
    }
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  append(value: any) {
    const item = new NodeLinkList(value);

    if (this.isEmpty()) {
      this.head = item;
    } else {
      let end = this.head;
      while (end.next) {
        end = end.next;
      }
      end.next = item;
    }
    this.size++;
  }

  prepend(value: any) {
    const item = new NodeLinkList(value);
    if (this.isEmpty()) {
      this.head = item;
    } else {
      item.next = this.head;
      this.head = item;
    }
    this.size++;
  }

  insert(value: any, index: number) {
    if (index > this.size || index < 0) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const item = new NodeLinkList(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      item.next = prev.next;
      prev.next = item;
      this.size++;
    }
  }

  print() {
    let str = "";
    let current = this.head;
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let index = 0;
    while (index < this.size) {
      str += `${current.data} `;
      current = current.next;
      index++;
    }
    console.log(str);
  }
}

const b = new LinkList();

b.append(10);
b.append(20);
b.append(30);
b.print();
b.reverse();
b.print();
b.reverse();
b.print();
