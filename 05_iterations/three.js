// // for of

// const arr=[1,2,3,4,5]
// for (const i of arr){
//     console.log(i);
// }

// const greetings="Hello World !"
// for(const greet of greetings){
//     console.log(`Each char is : ${greet}`)
// }

//MAPS
const map=new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('FR',"France")

console.log(map);

for(const key of map){
    console.log(key)
}

for(const [key, value] of map){
    console.log(key, ':-', value)
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
//for of does not work on object they are not 
// iteratable by for of
// there are other ways to iterate on objects