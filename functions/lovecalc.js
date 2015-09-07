'use strict';
var loveCalc = function (nameOne, nameTwo) {
    var nameNum = (nameOne.length + nameTwo.length);
    var randomNum = Math.floor(Math.random() * 6);
    nameNum = (nameNum - randomNum);
    var result = (nameNum * 42);
    if (result > 100){
        result = 100;
        return("Your love is 100!");
    }
    else {
        return("Your love result is " + result);
    }
};
loveCalc('Amy', 'Bob');