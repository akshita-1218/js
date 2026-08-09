function sayMyName(){
    console.log("Akshita Sharma");
}
// sayMyName();

// function addition(a,b){
//    console.log(a+b);
// }
// const result=addition(5,3);
// console.log(result); //undefined because function does not return anything

function addition(a,b){
//    let result=a+b;
//    return result;

      return a+b;
}

const result=addition(5,3);
// console.log("RESULT:", result); //8

function loginUserMessage(username="Akshita Sharma"){
    if(username===undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// const message=loginUserMessage("Akshita Sharma");
// console.log(message);
// console.log(loginUserMessage("Akshita Sharma"));
// console.log(loginUserMessage()); //Please enter a username

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(2,4,6))

const user={
    username:"Akshita",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);

handleObject({
    username:"sam",
    price:399
})

// const myNewArray=[200,400,100,600];

function returnSecondValue (getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue ([200,400,100,600])); 