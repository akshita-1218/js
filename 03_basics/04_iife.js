//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// (function chai(){
//     console.log("DB Connected")
// })()
// chai()

( () =>{
    console.log("hello");
}
)();

( (a,b)=>{
    console.log(a+b);
})
(2,4);

( (name,age)=>{
    console.log(`Hello ${name},${age}`);
})
('Akshita',20);