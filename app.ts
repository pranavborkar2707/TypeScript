console.log('this is typescript1');
console.log('this is typescript2');
// this is wrong declaration 
const a=10;
const b=20;
console.log(a+b);

// this is right declaration

const fun1 =()=> {
    const c = 22;
    const d = 30;
    console.log(c+d);
}

// fun1();
// const fun2=()=>{
// let FName : string='pranav';
// const age : number=24;
// const add :string=FName + age;
// console.log('FullName =',add);
// }

// fun2();

// Addition 

const fun3=(M:number,N:number)=>M+N;
const addition = fun3(4000,10).toString;
console.log(addition.length);



