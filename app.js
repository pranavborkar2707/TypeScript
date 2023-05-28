console.log('this is typescript1');
console.log('this is typescript2');
// this is wrong declaration 
var a = 10;
var b = 20;
console.log(a + b);
// this is right declaration
var fun1 = function () {
    var c = 22;
    var d = 30;
    console.log(c + d);
};
fun1();
