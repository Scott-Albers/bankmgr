/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', () => {
  describe('constructor', () => {
    it('a new account should return name, balance, and create number', () => {
      const account1 = new Account('Bob');
      expect(account1).to.be.instanceof(Account);
      expect(account1.number).to.be.length(36);
      expect(account1.number).not.to.be.undefined;
      expect(account1.name).to.equal('Bob');
      expect(account1.balance).to.equal(0);
      expect(account1.deposits).to.be.length(0);
      expect(account1.withdraws).to.be.length(0);
    });
  });
  describe('deposit', () => {
    it('should increase the balance by amount', () => {
      const account1 = new Account('Bob');
      const aBalance = account1.deposit(100);
      expect(account1.balance).to.equal(100);
      expect(aBalance).to.equal(100);
      expect(account1.deposits).to.be.length(1);
    });
  });
  describe('withdrawl', () => {
    it('should decrease the balance by 100 with balance of 100', () => {
      const account3 = new Account('Sue');
      let aBalance = account3.deposit(200);
      aBalance = account3.withdraw(100);
      expect(account3.balance).to.equal(100);
      expect(aBalance).to.equal(100);
      expect(account3.withdraws).to.be.length(1);
    });
    it('should decrease the balance by 100 to exaclty 0', () => {
      const account3 = new Account('Sue');
      let aBalance = account3.deposit(200);
      aBalance = account3.withdraw(200);
      expect(account3.balance).to.equal(0);
      expect(aBalance).to.equal(0);
      expect(account3.withdraws).to.be.length(1);
    });
    it('should fail to withdraw because there is not enough balance', () => {
      const account3 = new Account('Sue');
      const aBalance = account3.withdraw(200);
      expect(account3.balance).to.equal(0);
      expect(aBalance).to.equal(0);
      expect(account3.withdraws).to.be.length(0);
    });
  });
});
