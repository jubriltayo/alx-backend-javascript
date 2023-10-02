/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._name = String(name);
      this._length = Number(length);
      this._students = Array(students);
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
