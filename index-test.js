var dotKey = require('./index');
var test = require('tape');

var obj = {
  complex: {
    key: {
      more: 'stuff'
    }
  },
  simple: 1
}

test('#dotKey', function(t) {
  t.equals(
    dotKey('simple', obj),
    obj.simple,
    'gets one key, no dots'
  );

  t.deepEquals(
    dotKey('complex.key', obj),
    obj.complex.key,
    'gets a complex key with dots'
  );

  t.throws(function() {
    dotKey('randomstuff.doesntexist', obj);
  }, 'throws on invalid nested key');

  t.end();
});
