interface ListItem {
  value: any;
  next: ListItem | null;
}

interface IListList {
  head: ListItem | null;
  tail: ListItem | null;
  add(value: any): void;
  addFirst(value: any): void;
  delete(value: any): void;
  toArray(): ListItem[];
  getHead(): ListItem | null;
  getTail(): ListItem | null;
}

class LinkedList implements IListList {
  head: ListItem | null;
  tail: ListItem | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: any): void {
    const listItem: ListItem = { value, next: null };

    if (!this.head) {
      this.head = listItem;
    }

    if (this.tail) {
      this.tail.next = listItem;
    }

    this.tail = listItem;
  }

  addFirst(value: any): void {
    if (!this.head) {
      this.add(value);
      return;
    }

    const listItem: ListItem = { value, next: this.head };
    this.head = listItem;
  }

  delete(value: any): void {
    /*
    0. список может быть пустым или содержать единственный элемент
    1. список может не содержать удаляемого значения
    5. удаление нескольких одинаковых значений
    */

    // 0-е условие, когда список пустой
    if (!this.head) {
      return;
    }

    // 0-е условие, когда список имеет единственный элемент
    if (this.head.value === value && this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let item: ListItem | null = this.head;
    let prev: ListItem | null = null;

    while (item) {
      if (item.value === value) {
        if (item === this.head) {
          // 5.1 когда удаляем первый
          this.head = item.next;
        } else if (item === this.tail && prev) {
          // 5.3 когда удаляем последний
          this.tail = prev;
          this.tail.next = null;
        } else if (prev) {
          // 5.2 когда удаляем средний
          prev.next = item.next;
        }
      }
      prev = item;
      item = item.next;
    }
  }

  toArray(): ListItem[] {
    const items: ListItem[] = [];

    let item = this.head;
    while (item) {
      items.push(item);
      item = item.next;
    }

    return items;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

//test
const list = new LinkedList();
list.add('three');
list.add('three');
list.add('one');
list.add('three');
list.add('two');
console.log(list.toArray());
console.log({ head: list.getHead(), tail: list.getTail() });

list.delete('three');
console.log(list.toArray());
console.log({ head: list.getHead(), tail: list.getTail() });