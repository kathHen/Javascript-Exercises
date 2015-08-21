'use strict';
var nameOne = "Ace";
var nameTwo = "Patricia";
var loveCalc = function () {
    var nameNum = (nameOne.length + nameTwo.length);
    var randomNum = Math.floor(Math.random() * 6 + 1);
    nameNum = (nameNum - randomNum);
    var result = (nameNum * 42);
    if (result > 100){
        result = 100;
        console.log("Your love is 100!");
    } else {
        console.log("Your love result is " + result);
    }
};
loveCalc();