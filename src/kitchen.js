const _ = require('lodash');

function totalBill(items) {
  return _.sumBy(items, (i) => i.price * i.qty);
}

function mostOrdered(items) {
  return _.maxBy(items, 'qty').name;
}

module.exports = { totalBill, mostOrdered };
