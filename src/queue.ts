// Queue Implementation Optimised
class Queue {
  items: any[];
  front: number;
  rear: number;
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  enQueue(item: any) {
    this.items[this.rear] = item;
    this.rear++;
  }

  deQueue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  pick() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(JSON.stringify(this.items));
  }
}

const nonvaei = new Queue();
const adam1 = { name: "ali", age: 29 };
const adam2 = { name: "akbar", age: 49 };
const adam3 = { name: "askhar", age: 39 };
const adam4 = { name: "vahid", age: 19 };

nonvaei.enQueue(adam3);
nonvaei.enQueue(adam1);
nonvaei.enQueue(adam2);
nonvaei.print();
nonvaei.deQueue();
nonvaei.print();
console.log(nonvaei.isEmpty());


// Queue Implementation
// class Queue {
//   items: any[];

//   constructor() {
//     this.items = [];
//   }

//   enQueue(item: any) {
//     this.items.push(item);
//   }

//   deQueue() {
//     return this.items.shift();
//   }

//   pick() {
//     if (!this.isEmpty()) {
//       return this.items[0];
//     }
//     return null
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(JSON.stringify(this.items));
//   }
// }

// const nonvaei = new Queue();
// const adam1 = { name: "ali", age: 29 };
// const adam2 = { name: "akbar", age: 49 };
// const adam3 = { name: "askhar", age: 39 };
// const adam4 = { name: "vahid", age: 19 };

// nonvaei.enQueue(adam3);
// nonvaei.enQueue(adam1);
// nonvaei.enQueue(adam2);
// nonvaei.print();
// nonvaei.deQueue();
// nonvaei.print();
// console.log(nonvaei.isEmpty());
