var through = require('through2')

var runTests = function(util) {
  return util.tests.reduce(function(l, v) { return (l && v()); }, true);
};

var counter = 1;

module.exports = function() {
  console.log('PARTY ', counter++, this);
  return through.obj(function(file, encoding, callback) {
    this.push(file);
    callback();
  });
};

// module.exports = function() {
//   return Array.prototype.slice.call(arguments)
//     .reduce(function(l, v) { return l && runTests(v) });
// };