export interface IListItem {
  value: any;
  next: IListItem | null;
}

interface IListList {
  head: IListItem | null;
  tail: IListItem | null;
  add(value: any): void;
  addFirst(value: any): void;
  removeFirst(): IListItem | null;
  addAfter(value: any, afterValue: any): void;
  delete(value: any): void;
  toArray(): IListItem[];
  getHead(): IListItem | null;
  getTail(): IListItem | null;
  find(value: any): IListItem | null;
}

export class LinkedList implements IListList {
  head: IListItem | null;
  tail: IListItem | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: any): void {
    const listItem: IListItem = { value, next: null };

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

    const listItem: IListItem = { value, next: this.head };
    this.head = listItem;
  }

  removeFirst(): IListItem | null {
    // когда список пустой
    if (!this.head) {
      return null;
    }

    const item = this.head;
    // когда список имеет единственный элемент
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      // список состоит из нескольких элементов
      this.head = this.head.next;
    }
    return item;
  }

  addAfter(value: any, afterValue: any): void {
    /*
      1. вставка в список с единственным элементом
      2. вставка в список между элементами
      3. вставка в конец списка
    */

    // когда список пустой
    if (!this.head) {
      return;
    }

    const item: IListItem = { value, next: null };

    // 1. когда список имеет единственный элемент
    if (this.head.value === afterValue && this.head === this.tail) {
      this.head.next = item;
      this.tail = item;
      return;
    }

    // 2 и 3. вставка в середину и конец списка
    let current: IListItem | null = this.head;

    while (current) {
      if (current.value === afterValue) {
        if (current === this.tail) {
          this.tail = item;
        } else {
          item.next = current.next;
        }
        current.next = item;
        return;
      }
      current = current.next;
    }
  }

  find(value: any): IListItem | null {
    // 0-е условие, когда список пустой
    if (!this.head) {
      return null;
    }

    let current: IListItem | null = this.head;
    let result: IListItem | null = null;
    while (current) {
      if (current.value === value) {
        result = current;
        break;
      }
      current = current.next;
    }
    return result ? { ...result } : null;
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

    let current: IListItem | null = this.head;
    let prev: IListItem | null = null;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          // 5.1 удаляем первый
          this.head = current.next;
        } else if (current === this.tail) {
          // 5.3 удаляем последний
          if (prev) {
            this.tail = prev;
            this.tail.next = null;
          }
        } else {
          // 5.2 удаляем средний
          prev && (prev.next = current.next);
          current = current.next;
          continue;
        }
      }
      prev = current;
      current = current.next;
    }
  }

  toArray(): IListItem[] {
    const items: IListItem[] = [];

    let item = this.head;
    while (item) {
      items.push({ ...item });
      item = item.next;
    }

    return items;
  }

  getHead() {
    return this.head ? { ...this.head } : null;
  }

  getTail() {
    return this.tail ? { ...this.tail } : null;
  }
}

//test
/* const list = new LinkedList();
list.add('one');

console.log(list.toArray());
console.log({ head: list.getHead(), tail: list.getTail() });

list.addAfter('new', 'one');
console.log(list.toArray());
console.log({ head: list.getHead(), tail: list.getTail() });
 */
