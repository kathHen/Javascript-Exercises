'use strict';
var firsties = function () {
    var theArray = ["Yes", 5,"Never","Alrighty then"];
    var firstElement = theArray.shift();
    console.log (firstElement);
    if (theArray[1] === (/\[[0-9]+\]/)){
        console.log(theArray.shift());
    };
};
firsties()