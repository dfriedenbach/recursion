// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var objtype = typeof obj;
  if(objtype === 'object') {
    if(obj === null) {
      return 'null';
    } else if(Array.isArray(obj)) {
      var result = '';
      _.each(obj, function(value) {
        var stringified = stringifyJSON(value);
        if(stringified !== undefined) {
          if(result) {
            result = result + ',';
          }
          result = result + stringified;
        }
      });
      result = '[' + result + ']';
      return result;
    } else {
      var result = '';
      _.each(obj, function(value, key) {
        var stringified = stringifyJSON(value);
        if(stringified !== undefined) {
          if(result) {
            result = result + ',';
          }
          result = result + '"' + key + '"' + ':' + stringified;
        }
      });
      result = '{' + result + '}';
      return result;
    }
  } else if(objtype === 'string') {
    return '"' + obj + '"'
  } else if(obj !== undefined && objtype !== 'function') {
    return String(obj);
  }
};
