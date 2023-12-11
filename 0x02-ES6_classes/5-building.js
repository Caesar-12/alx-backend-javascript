export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (typeof this.evacuationWarningMessage !== 'function' && this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
