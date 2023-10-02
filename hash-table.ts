export class HashTable {
  size: number;
  buckets: any[];

  constructor(size: number) {
    this.size = size;
    this.buckets = Array(size).fill(null);
  }

  hash(key: string): number {
    let result = 0;
    for (const char of key) {
      result += char.charCodeAt(0);
    }
    return result % this.size;
  }

  set(key: string, value: any): void {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key: string): any {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

}
