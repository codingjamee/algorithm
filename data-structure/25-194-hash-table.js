class HashTable {
  constructor(size = 53) {
    //사이즈가 기본이 53인 어레이를 this.keyMap에 저장해줌
    this.keyMap = new Array(size);
  }

  set(key, val) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
    return index;
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
  f;

  get(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) return undefined;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }

  values() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][0])) {
            valuesArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  keys() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
