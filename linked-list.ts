interface ListItem {
  value: any;
  next: ListItem | null;
}

interface IListList {
  head: ListItem | null;
  tail: ListItem | null;
  add(value: ListItem): void;
  toArray(): ListItem[];
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
console.log(list.toArray());
