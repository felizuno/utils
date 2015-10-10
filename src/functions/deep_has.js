{
  name: 'Deep Has',
  author: 'Kevin Ewing',
  client: true,
  node: true,
  func: function(src, accessString) {
    return accessString
      .replace(/\[/g, '.') // can these two replaces be done with a regex
      .replace(/\]/g, '') // matching two things?
      .split('.')
      .reduce(function(l, v, i) {
        return (l && l.hasOwnProperty(v)) ? l[v] : undefined;
      }, src);
  },
  stubs: {
    src1: { first: { second: [{third: 0}]} },
    src2: { first: { second: [{third: false}]} },
    src3: { first: { second: [{third: null}]} },
    src4: { first: { second: [0, 0, {third: 1}]} },
    src5: [{ first: { second: [{third: 1}]} }]
  },
  tests: [
    function() {
      return this.func(stubs.src1, 'first.second[0].third') === 0;
    },
    function() {
      return this.func(stubs.src2, 'first.second[0].third') === false;
    },
    function() {
      return this.func(stubs.src3, 'first.second[0].third') === null;
    },
    function() {
      return this.func(stubs.src3, 'first.second[2].third') === 1;
    },
    function() {
      return this.func(stubs.src3, '[0].first.second[0].third') === 1;
    },
  ]
};
