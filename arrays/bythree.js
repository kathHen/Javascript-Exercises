'use strict';
var theArray = [];
var findingthrees = function() {
    for (var i = 0; i < 50; i++) {
        theArray [i] = i + 1;
    }
    ;
    for (var i = 0; i < theArray.length; i++) {
        if (theArray[i] % 3 === 0) {
            console.log(theArray[i]);
        }
    }
    ;
};
findingthrees();