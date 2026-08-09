// ARRAY

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);
// console.log(myArr[0]);

// const myArr2= new Array(1, 2, 3, 4, 5);
// // console.log(myArr2);

// const myArr3 = new Array(5);
// // console.log(myArr3);

// ARRAY METHODS

// myArr.push(6);

// myArr.unshift(9);
// myArr.shift();

// myArr.pop();

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9));

const newArr = myArr.join(" ");

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//SLICE AND SPLICE

console.log("A ", myArr);
console.log("B ", myArr.slice(1, 4));
console.log("C ", myArr.splice(1, 4));
console.log("D ", myArr);