const test = require('node:test');
const assert = require('node:assert');
const { totalBill, mostOrdered } = require('../src/kitchen');

const orders = [
  { name: 'pasta', price: 10, qty: 3 },
  { name: 'pizza', price: 12, qty: 5 },
];

test('totalBill adds up all items', () => {
  assert.strictEqual(totalBill(orders), 90);
});

test('mostOrdered returns the popular dish', () => {
  assert.strictEqual(mostOrdered(orders), 'pizza');
});
