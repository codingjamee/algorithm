class HashTable {
  constructor(size = 53) {
    //사이즈가 기본이 53인 어레이를 this.keyMap에 저장해줌
    this.keyMap = new Array(size);
  }

  set(key, val) {
    const hashedKey = this._hash(key);

    if (this.keyMap[hashedKey]) {
      this.keyMap[hashedKey];
    }
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.cahrCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
