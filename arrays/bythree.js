'use strict';
var findingthrees = function() {
    var threesArray = [];
    for (var i = 1; i < 50; i++) {
        if (i%3 === 0){
            threesArray.push(i);
         }
    }
    return threesArray;
};
findingthrees();
