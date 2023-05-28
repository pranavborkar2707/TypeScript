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
// fun1();
// const fun2=()=>{
// let FName : string='pranav';
// const age : number=24;
// const add :string=FName + age;
// console.log('FullName =',add);
// }
// fun2();
// Addition 
var fun3 = function (M, N) { return M + N; };
var addition = fun3(4000, 10).toString;
console.log(addition.length);
