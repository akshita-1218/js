//////// SINGLETONS ////////

//SINGLETON IS NOT FORMED USING TEMPLATE LITERAL, 
// IT IS FORMED USING CONSTRUCTOR FUNCTION OR CLASS

//OBJECT LITERAL ----

const mySym=Symbol("Key1");

const JsUser={
    name:"John",
    "full name":"John Doe",
    [mySym]:"myKey1",
    age:30, 
    location:"USA",
    email:"john@example.com",
    isLoggedIn:false,
    lastloggedIn:["Monday","Tuesday","Wednesday"]
}

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym);
// console.log([mySym]);

// JsUser.email="chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email="akshita.com";
// console.log(JsUser.email);
console.log(JsUser);

 JsUser.greetingTwo=function(){
    // console.log(`Hello ${this.name}`);
 }
//  console.log(JsUser.greetingTwo()); 