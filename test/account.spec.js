/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', () => {
  describe('constructor', () => {
    it('a new account should return name, balance, and create number', () => {
      const account1 = new Account('Bob', 3.0);
      expect(account1).to.be.instanceof(Account);
      expect(account1.number).to.be.length(36);
      expect(account1.number).not.to.be.undefined;
      expect(account1.name).to.equal('Bob');
      expect(account1.balance).to.equal(3.0);
      expect(account1.deposits).to.be.length(0);
      expect(account1.withdraws).to.be.length(0);
    });
  });
});
