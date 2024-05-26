type HashTableItem = {
  key: string;
  value: any;
};
class HashTable {
  table: HashTableItem[][];
  size: number;
  constructor(size: number) {
    this.table = new Array(size);
    this.size = size;
  }

  set(item: HashTableItem) {
    const index = this.hash(item.key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [item];
    } else {
      for (let i = 0; i < bucket.length; i++) {
        const element = bucket[i];
        if (element.key === item.key) {
          this.table[index][i].value = item.value;
          return;
        }
      }
      this.table[index].push(item);
    }
  }

  get(key: string) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.filter((i) => i.key === key);
      if (sameKeyItem) {
        return this.table[index];
      }
    }
    return undefined;
  }

  remove(key: string) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const element = bucket[i];
        if (element.key === key) {
          this.table[index][i] = undefined;
        }
      }
    }
  }

  hash(key: String) {
    let total = 0;
    for (let index = 0; index < key.length; index++) {
      total += key.charCodeAt(index);
    }

    return total % this.size;
  }

  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        for (let j = 0; j < this.table[index].length; j++) {
          const element = this.table[index][j];
          console.log(element);
        }
      }
    }
  }

  print() {
    console.log(this.table);
  }
}

const rr = new HashTable(5);
rr.set({ key: "ali", value: 8 });
rr.set({ key: "reza", value: "29" });
rr.set({ key: "ali1", value: 1 });
rr.set({ key: "ali1", value: 2 });
rr.set({ key: "reza2323", value: "29" });

rr.display();
