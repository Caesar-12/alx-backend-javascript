export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      console.error('TypeError: Sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage method must be implemented in the subclass.');
  }
}
