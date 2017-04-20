/* eslint-env mocha, chai */
/* global sumFor, sumWhile, sumRecursion, sumTheSimpleWay, chai */

describe('zipList', function () {
  const resultList = [];
  describe('Zipping two test arrays', function () {
    it('should return a single array for six elements', function () {
      chai.expect(resultList).to.have.lengthOf(6);
    });
    it('should deep equal the passed sixth element array', function () {
      chai.expect(sumFor(resultList)).to.equal(10);
    });
  });
});

describe('zipListTheSimpleWay', function () {
  const resultList = [1, 2, 3, 4];
  describe('Zipping two test arrays', function () {
    it('should return a single array for six elements', function () {
      chai.expect(resultList).to.have.lengthOf(6);
    });
    it('should deep equal the passed sixth element array', function () {
      chai.expect(sumFor(resultList)).to.equal(10);
    });
  });
});