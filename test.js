const mtrx = require('mtrx');
const {expect} = require('chai');

describe('Matrix operations', () => {

  it('adds two matrices', () => {
    const m1 = [[1, 2], [3, 4]];
    const m2 = [[2, 3], [4, 5]];
    const expected = [[3, 5], [7, 9]]; 
    const result = mtrx.add(m1, m2);
    expect(result).to.deep.equal(expected);
  });
  
});