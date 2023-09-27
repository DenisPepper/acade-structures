interface ListItem {
  value: any;
  next: ListItem | null;
}

interface IListList {
  head: ListItem | null;
  tail: ListItem | null;
  add(value: ListItem): void;
}

class LinkedList implements IListList {
  head: ListItem | null;
  tail: ListItem | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: any) {
    const listItem: ListItem = { value, next: null };

    if (!this.head) {
      this.head = listItem;
    }

    if (this.tail) {
      this.tail.next = listItem;
    }

    this.tail = listItem;
  }
}
