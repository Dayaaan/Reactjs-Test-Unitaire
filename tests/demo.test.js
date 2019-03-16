import { expect } from 'chai';

// should de chai doit être exécutée avant d'être utilisée

const value = 2;

// Série de tests - Chapitre de tests
describe('Série de tests DEMO', () => {
  // Test
  it('should pass', () => {
    // Le code du test
    // assertion venant de node : https://nodejs.org/api/assert.html
    // assert.strictEqual(value, 2);

    // assert de chai
    // assert.equal(value, 2);

    // expect de chai
    expect(value).to.be.equal(2);

    // should de chai
    // value.should.be.equal(2);
  });

  // Test en attente : pas de fonction de traitement
  it('Test pending');

  it.skip('pending force', () => {
    // code
    expect(true).to.be.equal(true);
  });
});
