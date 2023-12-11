export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('length must be a number');
    if (!Array.isArray(students)) throw new TypeError('students type must be an Array');
  
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      console.error('TypeError: Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number' && Number.isInteger(newLength)) {
      this._length = newLength;
    } else {
      console.error('TypeError: Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      console.error('TypeError: Students must be an Array');
    }
  }
}
