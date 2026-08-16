const programming=['js','cpp','swift','java'] 
// programming.forEach(function(val) {
//     console.log(val)
// });

// programming.forEach((val)=>{
//     console.log(val);
// });

// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe)
// programming.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding=[
    {
        language:"java",
        languageFileName:"java"
    },
    {
        language:"python",
        languageFileName:"py"
    },
    {
        language:"javascript",
        languageFileName:"js"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})