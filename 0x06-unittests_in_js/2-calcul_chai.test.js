const calculateNumber = require("./2-calcul_chai.js");
const { expect } = require('chai');

expect(calculateNumber('SUM', 1.2, 3.4)).to.equal(4);
expect(calculateNumber('SUBTRACT', 5.5, 3.4)).to.equal(3);
expect(calculateNumber('DIVIDE', 7.7, 3.6)).to.equal(2);
expect(calculateNumber('DIVIDE', 14.5, 0)).to.equal('Error');
