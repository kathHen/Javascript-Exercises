'use strict';
var a = [1,3,5,7,8,4,2,9];
var bubbleSort = function(a){
    var swapper;
    do {
        swapper = false;
        for (var i=0; i < a.length-1; i++){
            if (a[i] > a[i+1]){
                var swap = a[i];
                a[i] = a[i+1];
                a[i+1] = swap;
                swapper = true;
            }
        }
    } while (swapper);
};
bubbleSort(a);
console.log(a);


/*var bubbleSort = function() {

 for (var i = 0; i < thisArray.length; i++){
 for (var j =0; j < thisArray.length - 1; j++){
 if (thisArray[j] > thisArray[j+1]) {
 var swap = thisArray[j];
 thisArray[j] = thisArray[j+1];
 thisArray[j+1] = swap;
 }
 }

 }

 };
 console.log(thisArray);

 bubbleSort();*/