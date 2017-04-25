/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('zipList', function () {
  const testList1 = ['a', 'b', 'c'];
  const testList2 = [1, 2, 3];
  describe('Zipping two test arrays', function () {
    it('should return a single array for six elements', function () {
      chai.expect(zipList(testList1, testList2)).to.have.lengthOf(6);
    });
    it('should deep equal the passed sixth element array', function () {
      chai.expect(zipList(testList1, testList2)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});

describe('zipListTheSimpleWay', function () {
  const resultList = [1, 2, 3, 4];
  describe('Zipping two test arrays', function () {
    it('should return a single array for six elements', function () {
      chai.expect(zipListTheSimpleWay(testList1, testList2)).to.have.lengthOf(6);
    });
    it('should deep equal the passed sixth element array', function () {
      chai.expect(zipListTheSimpleWay(testList1, testList2)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});