interface Builder {
  length: number;
  insert: (input: number) => void;
  removeAt: (index: number) => void;
  indexOf: (input: number) => void;
  print: () => void;
}

class ArrayBuilder implements Builder {
  private items: number[];
  private count: number;

  constructor(public length: number) {
    this.count = 0;
    this.items = new Array(this.length);
  }

  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
  }
  insert(input: number) {
    if (this.count === this.length) return;
    this.items[this.count] = input;
    this.count++;
  }
  removeAt(index: number) {
    if (index < 0 || index >= this.items.length)
      throw new Error("invalid index");
    for (let i = index; i < this.count; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.count--;
  }
  indexOf(input: number) {
    for (let i = 0; i < this.count; i++) {
      if (this.items[i] === input) return console.log(i);
    }
    throw new Error("input is wrong");
  }
}

export default ArrayBuilder;
