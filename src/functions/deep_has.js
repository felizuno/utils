var deepHas = function(src, accessString) {
  return accessString
    .replace(/\[/g, '.') // can these two replaces be done with a regex
    .replace(/\]/g, '') // matching two things?
    .split('.')
    .reduce(function(l, v, i) {
      return (l && l.hasOwnProperty(v)) ? l[v] : undefined;
    }, src);
};
