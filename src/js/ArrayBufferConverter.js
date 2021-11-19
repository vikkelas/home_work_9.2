/* eslint-disable linebreak-style */
export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const obj = [];
    const buffer16 = new Uint16Array(this.buffer);
    for (let i = 0; i < buffer16.length; i += 1) {
      obj.push(String.fromCharCode(buffer16[i]));
    }
    return obj.join('');
  }
}
