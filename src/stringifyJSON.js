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
      for(var i = 0; i < obj.length; i++) {
        var stringified = stringifyJSON(obj[i]);
        if(stringified !== undefined) {
          if(result) {
            result = result + ',';
          }
          result = result + stringified;
        }
      }
      result = '[' + result + ']';
      return result;
    } else {
      var result = '';
      for(var key in obj) {
        var stringified = stringifyJSON(obj[key]);
        if(stringified !== undefined) {
          if(result) {
            result = result + ',';
          }
          result = result + '"' + key + '"' + ':' + stringified;
        }
      }
      result = '{' + result + '}';
      return result;
    }
  } else if(objtype === 'string') {
    return '"' + obj + '"'
  } else if(obj !== undefined && objtype !== 'function') {
    return String(obj);
  }
};
