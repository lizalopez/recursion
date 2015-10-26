// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj)  {
  //check if argument is complex or primitive
  //if primitive, just enclose with "" and print out -- base case
  if (typeof(obj) !== "object" || (!obj)) {
      return (typeof(obj) == 'string') ?  "\""+obj+"\"" : ''+obj; 
  } else {
     //if it's an array, iterate accordingly through each type
    var arrayInput = [];
    if (Array.isArray(obj)) {
      for (var i=0; i<obj.length; i++) {
        //originally set (!obj[i]) but conditional statement did not account for negative integers
        if (obj[i] === undefined) {
          return '[]';
        } else {
            //when looking inside itself, check if it is primitive or complex
            //if it's complex, recurse on the current argumentd
            arrayInput.push(stringifyJSON(obj[i]));  
        } 
      }
      //after the end of each array (or sub-array), enclose in brackets
        return "["+arrayInput+"]";
    } else {
      //if it's an object, iterate accordingly through each type
      //The continue statement breaks one iteration if the property is a fn or undefined
      //and continues with the next iteration in the loop.
      for (var k in obj) {
        if (obj[k] === undefined || typeof(obj[k]) === "function") {
          continue;
        } else {
          arrayInput.push("\""+k+"\""+':'+stringifyJSON(obj[k]));
        }
      }
      //after the end of each object, (or nested object), enclose in curly braces
      return "{"+arrayInput+"}";            
    }
  }
};

  
  

 
  




