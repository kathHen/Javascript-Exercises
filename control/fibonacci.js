'use strict';
/*var a = 1,
b = 0,
f = 1,
i = 1;
while (i < 20){
    a = b + f;
    console.log(a);
    b = f;
    f = a;
    i++;
}*/

var fibonacci = function (amount) {
    var fib = [0, 1];
    for (var i=0; i < amount; i++){
        fib.push(fib[0] + fib[1]);
        fib.shift();
        console.log(fib[0]);
    }
}
fibonacci(30);