const calculateNumber = require("./1-calcul.js");
const assert = require('assert');

assert.strictEqual(calculateNumber("SUM", 1.2, 2.3), 3);
assert.strictEqual(calculateNumber("SUBTRACT", 5, 2.7), 2);
assert.strictEqual(calculateNumber("DIVIDE", 7.5, 2), 4);
assert.strictEqual(calculateNumber("DIVIDE", 5.8, 0), 'Error');
