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
    0. список может быть пустым
    1. список может не содержать удаляемого значения
    2. удаляем первый элемеент
    3. удаляем последний элемент
    4. удаляем средний элемент
    */

    
   
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
}

//test
const list = new LinkedList();
list.add('one');
list.add('two');
list.add('three');
list.addFirst('firse element here');
console.log(list.toArray());
