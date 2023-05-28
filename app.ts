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

fun1();
