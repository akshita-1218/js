const user={
    username:"Akshita",
    price : 999,

    welcomeMessage: function(){
        //  console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}
user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage();

// console.log(this)

// function chai(){
//     let username="Akshita"
//     console.log(this.username);
// }
// chai()

// const chai= function(){
//     let username="Akshita"
//     console.log(this.username);
// }
// chai()

// const chai= ()=>{
//     let username="Akshita"
//     console.log(this.username);
// }
// chai()

// const person = {
//     username:"AKSHITA",

//     greet: function(){
//         console.log(this.username)
//     }
// }
// person.greet();


// const add = (a,b)=>{
//     return a+b;
// }
// console.log(add(2,4));\

const add=(a,b)=>a+b;
console.log(add(2,3))

const sq=x=>x*x;
console.log(sq(4))

const obj=(name)=>({name})
console.log(obj("akshita"))

const obj1=(Name,Age)=>({
    Name,
    Age
});
console.log(obj1("Alice",20))