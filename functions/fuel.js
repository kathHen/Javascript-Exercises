'use strict';
var mpg = 30;
var distance = 204;
var fuelCalc = function (){
    var answer = (distance / mpg);
    console.log("The amount of gallons you need to travel is " + answer);
};
fuelCalc();