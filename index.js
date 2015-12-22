module.exports = function dotKey(dottedKey, object) {
  return dottedKey.split('.').reduce(function(finalObject, key) {
    return finalObject[key];
  }, object);
}
