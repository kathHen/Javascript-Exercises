'use strict';
var makingTriangles = function (size){
    var stars = '',
        spaces = '';
    for (var i = 0; i < size; i++){
        stars += '*';
        if (stars.length > 1){
            stars += "*";
        }
        spaces = '';
        for(var j = size-1-i; j > 0; j--){
            spaces += " ";
        }
        console.log(spaces + stars);
    }
};
makingTriangles(20);