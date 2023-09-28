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
    0. список может быть пустым или содержать единственный элемент
    1. список может не содержать удаляемого значения
    2. удаляем первый не единственный элемеент
    3. удаляем последний не единственный элемент
    4. удаляем средний элемент
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

    // 2-е условие, удаляем первый не единственный элемеент
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let head: ListItem | null = this.head;
    let current: ListItem | null = this.head.next;

    while (current) {
      if (current.value === value) {
        //3. удаляем последний не единственный элемент
        if (current === this.tail) {
          this.tail = head;
        }
        //4. удаляем средний элемент
        head.next = current.next;
        return;
      }
      head = current;
      current = current.next;
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
}

//test
const list = new LinkedList();
list.add('one');
list.add('two');
list.add('three');
list.addFirst('first');
console.log(list.toArray());

list.delete('three');
console.log(list.toArray());
