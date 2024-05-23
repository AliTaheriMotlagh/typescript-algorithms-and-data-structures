class CircularQueue {
  items: Array<any>;
  front: number;
  rear: number;
  currentLength: number;
  capacity: number;

  constructor(capacity: number) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enQueue(item: any) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  size() {
    return this.currentLength;
  }

  print() {
    if (this.isEmpty()) {
      console.log("queue is empty");
    } else {
      let index;
      let str = "";
      for (
        index = this.front;
        index !== this.rear;
        index = (index + 1) % this.capacity
      ) {
        str += this.items[index] + " ";
      }
      str += this.items[index] + " ";
      console.log(str);
    }
  }
}

const a = new CircularQueue(6);
a.enQueue(1);
a.enQueue(2);
a.deQueue();
a.enQueue(3);
a.enQueue(4);
a.enQueue(5);
a.enQueue(6);
a.deQueue();
a.enQueue(173);
a.enQueue(173);

a.print();
console.log(a.isEmpty());
console.log(a.size());
console.log("-----");
