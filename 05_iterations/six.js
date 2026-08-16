// const coding=['js','cpp','swift','java']
// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values);

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// // const newNums=myNums.filter( (nums)=> nums>4)
// const newNums=myNums.filter( (nums)=> nums===5)
// console.log(newNums)

const books=[
    {
        title:'book1',
        genre:'Non-Fiction'
    },
    {
        title:'book2',
        genre:'Science'
    },
    {
        title:'book3',
        genre:'History'
    }
]
const userBooks=books.filter( (bk)=>bk.genre==='History')
console.log(userBooks)