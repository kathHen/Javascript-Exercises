'use strict';
var lastElement = function (){
    var theArray = [3,4,2,1,5,6,2];
    var dothePop =theArray.slice(-1).pop();
    console.log(dothePop);
};
lastElement()