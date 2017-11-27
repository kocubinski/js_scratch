var fp = require('lodash/fp');
var _ = require('lodash');

function* range() {
  let i = 0;
  while (true) {
    yield i++;
  }
};

let [x, y, z] = range();
console.log(typeof range());
//console.log(Array.from(range()).splice(0, 9));

let res = fp.map(_.identity)("foo");
console.log(res);

function take(n, iterable) {
  let result = [], i = 0;
  while (i < n) {
    result.push(iterable.next().value);
    i++;
  }
  return result;
}

function* row(start) {
  let color = start;
  while (true) {
    yield color == " " ? color = "#" : color = " ";
  }
};

const plus = (x, y) => x + y;

const board = size =>
      take(size, range())
      .map(i => take(size, row(i % 2 === 0 ? " " : "#")))
      .map(row => row.reduce(plus));

console.log(board(8));

// or

board(8).forEach(r => console.log(r));
