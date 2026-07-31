// Primitive 
//7types: String, Number, Boolean, Null, Undefined 
// , Symbol , BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId);
// console.log(id==anotherId);

// const bigNumber=9007199254740991n


//Regerence type or Non Primitive
// Array, Objects,Functions

const heros=['shaktiman','naagraj','doga']
let myObj={
    name:"Akshita",
    age:18,
}
const myFunction=function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);


// **********************

// Stack(primitive) and Heap Memory(non orimitive)

let myYoutubename="Akshita" 
let anotherName=myYoutubename 

anotherName="Akshita Sharma" 
// console.log(myYoutubename);
// console.log(anotherName);

let user={
    email:"user@gmail.com",
    upi:"user@upi"
}
let user2=user
user2.email="akshita@gmail.com"

console.log(user.email);
console.log(user2.email);