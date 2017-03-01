/* eslint-disable no-unused-expressions, strict */

const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', () => {
  'use strict';
  describe('constructor', () => {
    it('should construct a new Account object', () => {
      const a1 = new Account('Bob');
      expect(a1).to.be.instanceof(Account);
      expect(a1.number).to.be.length(36);
      expect(a1.number).not.to.be.undefined;
      expect(a1.name).to.equal('Bob');
      expect(a1.balance).to.equal(0);
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(0);
    });
  });
  describe('#deposit', () => {
    it('should increase the balance by amount', () => {
      const a1 = new Account('Bob');
      const balance = a1.deposit(100);
      expect(a1.balance).to.equal(100);
      expect(balance).to.equal(100);
      expect(a1.deposits).to.be.length(1);
    });
    it('should increase the balance to be the running total', () => {
      const a1 = new Account('Bob');
      let balance = a1.deposit(50);
      balance = a1.deposit(100);
      expect(a1.balance).to.equal(150);
      expect(balance).to.equal(150);
      expect(a1.deposits).to.be.length(2);
    });
  });
  describe('#withdrawl', () => {
    it('should decrease the balance by the amount', () => {
      const a2 = new Account('Sue');
      let balance = a2.deposit(200);
      balance = a2.withdraw(100);
      expect(a2.balance).to.equal(100);
      expect(balance).to.equal(100);
      expect(a2.withdraws).to.be.length(1);
    });
    it('should decrease the balance to be the running total', () => {
      const a2 = new Account('Sue');
      let balance = a2.deposit(1000);
      balance = a2.withdraw(100);
      balance = a2.withdraw(100);
      expect(a2.balance).to.equal(800);
      expect(balance).to.equal(800);
      expect(a2.withdraws).to.be.length(2);
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
