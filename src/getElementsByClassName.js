// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
//create inner function to insert a specific node as argument and automatically
//run body as the first argument. The first loop checks the current Node for a match
//with the target and pushes it onto an array, the second loop checks for children 
//and recursively runs the inner function on each child node found. 
  var nodeList = []; 
  function inner(currentNode) {

    if (currentNode.classList) {
        for (var i = 0; i < currentNode.classList.length; i++) {
          if (currentNode.classList[i] == className){
            nodeList.push(currentNode);
          }
        }
      } 
    if (currentNode.children.length > 0) {
      for (var i=0; i<currentNode.children.length; i++) {
        inner(currentNode.children[i]);
      }
    } 
    return nodeList;
  }
  return inner(document.body);
};

//You should use document.body, element.childNodes, and element.classList,
//use children instead of childnodes, to exclude text and comment nodes
