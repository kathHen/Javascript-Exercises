'use strict';
var theFizzBuzz = function() {
    var the100 = [];
    for (var i = 0; i < 100; i++) {
        the100 [i] = i + 1;
        if ((the100[i] % 3 === 0) && (the100[i] % 5 === 0)) {
            console.log("Javascript");
        } else if (the100[i] % 3 === 0) {
            console.log("Java");
        } else if (the100[i] % 5 === 0) {
            console.log("Script");
        } else {
            console.log(the100[i]);
        }
    }
};
theFizzBuzz();