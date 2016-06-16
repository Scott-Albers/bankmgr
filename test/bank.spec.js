/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Account = require('../lib/account');
const Bank = require('../lib/bank');

describe('Bank', () => {
  describe('constructor', () => {
    it('a new bank should return name, accounts', () => {
      const b1 = new Bank('Bank of Mike');
      expect(b1).to.be.instanceof(Bank);
      expect(b1.name).to.equal('Bank of Mike');
      expect(b1.accounts).to.be.length(0);
    });
  });
  describe('addAccount', () => {
    it('add a new account to the Bank', () => {
      const a1 = new Account('Bob');
      const b1 = new Bank('Bank of Mike');
      b1.addAccount(a1);
      expect(b1.accounts).to.be.length(1);
      expect(b1.accounts[0].name).to.equal('Bob');
      expect(b1.accounts[0].balance).to.equal(0);
    });
  });
  describe('getValue', () => {
    it('should return the total value of all accounts as 0', () => {
      const a1 = new Account('Bob');
      const b1 = new Bank('Bank of Mike');
      b1.addAccount(a1);
      const b1v1 = b1.getValue();
      expect(b1v1).to.equal(0);
    });
    it('should return the total value of all accounts as 100', () => {
      const a1 = new Account('Bob');
      a1.deposit(100);
      const b1 = new Bank('Bank of Mike');
      b1.addAccount(a1);
      const b1v1 = b1.getValue();
      expect(b1v1).to.equal(100);
    });
    it('should return the total value 2 accounts as 300', () => {
      const a1 = new Account('Bob');
      a1.deposit(100);
      const b1 = new Bank('Bank of Mike');
      b1.addAccount(a1);
      const a2 = new Account('Sue');
      a2.deposit(200);
      b1.addAccount(a2);
      const b1v1 = b1.getValue();
      expect(b1v1).to.equal(300);
    });
  });
});
