// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  if(node === undefined) {
    node = document;
  }
  var results = [];
  var children = node.childNodes;
  _.each(children, function(elem) {
    if(_.contains(elem.classList, className)) {
      results.push(elem);
    }
    if(elem.childNodes.length > 0) {
      results.push(getElementsByClassName(className, elem));
    }
  });
  var results = _.flatten(results);
  return results;
};
