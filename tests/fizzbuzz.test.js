// import : npm
import { should } from 'chai';

// import : src
import fizzbuzz from '../src/fizzbuzz';

should();

/**
 * Tests
 */
describe('FizzBuzz', () => {
  describe('Function', () => {
    it('should be a function', () => {
      fizzbuzz.should.be.a('function');
    });

    it('should return an object', () => {
      const game = fizzbuzz();
      game.should.be.an('object');
    });
  });

  describe('Game object', () => {
    const game = fizzbuzz();

    it('should have a property generate which is a function', () => {
      game.should.have.property('generate').which.is.a('function');
    });
  });

  describe('generate', () => {
    const game = fizzbuzz();

    it('should retrun a string', () => {
      game.generate().should.be.a('string');
    });

    it('should return "1" when give 1 param', () => {
      game.generate(1, 1).should.be.equal('1');
    });

    it('should return "Fizz" when give 3 param', () => {
      game.generate(3, 3).should.be.equal('Fizz');
    });

    it('should return "Fizz" when give 6 param', () => {
      game.generate(6, 6).should.be.equal('Fizz');
    });

    it('should return "Buzz" when give 5 param', () => {
      game.generate(5, 5).should.be.equal('Buzz');
    });

    it('should return "Buzz" when give 10 param', () => {
      game.generate(10, 10).should.be.equal('Buzz');
    });

    it('should return "FizzBuzz" when give 15 param', () => {
      game.generate(15, 15).should.be.equal('FizzBuzz');
    });

    it('should return "FizzBuzz" when give 30 param', () => {
      game.generate(30, 30).should.be.equal('FizzBuzz');
    });

    it('should return "12" when give 1, 2', () => {
      game.generate(1, 2).should.be.equal('12');
    });

    it('should return "12Fizz" when give 1, 3', () => {
      game.generate(1, 3).should.be.equal('12Fizz');
    });

    it('should return "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16" when give 1, 16', () => {
      game.generate(1, 16).should.be.equal('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16');
    });
  });
});
