// Import : npm
import { should } from 'chai';

// Import : src
import { sum } from '../src/utils/numbers';

// j'exécute should pour qu'il soit dispo
should();

// sum, multiply, divide
/**
 * Tests
 */
describe('Numbers', () => {
  describe('sum', () => {
    it('should be a function', () => {
      sum.should.be.a('function');
    });

    it('should return a number', () => {
      sum().should.be.a('number');
    });

    it('should return sum of parameters', () => {
      sum(1, 2).should.be.a('number').which.is.equal(3);
      sum(2, 4).should.be.a('number').which.is.equal(6);
      sum(-1, -1).should.be.a('number').which.is.equal(-2);
      sum(-1, 1).should.be.a('number').which.is.equal(0);
    });
  });
});
