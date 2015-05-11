// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'object') {
    if(obj === undefined) {
      return;
    } else if(obj === null){
      return 'null';
    } else {
      
    }
  } else if(typeof obj === 'string') {
    return '"' + obj + '"'
  } else if(typeof obj !== 'function') {
    return String(obj);
  }
};
