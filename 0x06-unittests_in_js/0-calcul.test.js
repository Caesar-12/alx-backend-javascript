const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

assert.strictEqual(calculateNumber(1.2, 2.3), 3);
assert.strictEqual(calculateNumber(3, 2.7), 6);
assert.strictEqual(calculateNumber(7.5, 3), 11);
assert.strictEqual(calculateNumber(5.8, 2.3), 8);
assert.strictEqual(calculateNumber(6.5, 3.5), 11);
