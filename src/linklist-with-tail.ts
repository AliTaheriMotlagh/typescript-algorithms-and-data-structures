export class NodeLinkListWithTail {
  data: any;
  next: NodeLinkListWithTail;
  constructor(value: any) {
    this.data = value;
    this.next = null;
  }
}

export class LinkListWithTail {
  head: NodeLinkListWithTail;
  tail: NodeLinkListWithTail;
  size: number;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  append(value: any) {
    const item = new NodeLinkListWithTail(value);
    if (this.isEmpty()) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
    this.size++;
  }

  prepend(value: any) {
    const item = new NodeLinkListWithTail(value);
    if (this.isEmpty()) {
      this.head = item;
      this.tail = item;
    } else {
      item.next = this.head;
      this.head = item;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const itemData = this.head.data;
    this.head = this.head.next;
    this.size--;
    return itemData
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    const itemData = this.tail.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
      this.size--;
      return itemData;
    }
  }

  print() {
    let str = "";
    let current = this.head;
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }

    while (current) {
      str += `${current.data} `;
      current = current.next;
    }

    console.log(str);
  }
}



// const c = new LinkListWithTail();

// c.append(1);
// c.append(2);
// c.append(3);
// c.prepend(0)
// c.print();

