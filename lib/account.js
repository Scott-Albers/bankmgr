const uuid = require('uuid');

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
  this.number = uuid.v1();
  this.deposits = [];
  this.withdraws = [];
}

module.exports = Account;
