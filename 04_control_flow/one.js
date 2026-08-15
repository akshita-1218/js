// // IF
// const isUserLoggedIn=true
// if(isUserLoggedIn){
//     console.log("yes")
// }

// if(3!=2){
//     console.log("executed")
// }

// if(2==="2"){
//     console.log("hey")
// }else{
//     console.log("heyy")
// }

// const temp = 49
// if(temp<50){
//     console.log("yes");
// }else{
// console.log("greater");
// }

// const score=200
// if(score>100){
//     var power="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000
// // if(balance>500) console.log("test");
// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}