const myObject = {
    js : 'javascript',
    cpp : 'c++',
    swift : 'swift by apple'
}
for (const key in myObject) {
    console.log(key)
    
}
for(const key in myObject){
    console.log(myObject[key])
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming=['js','cpp','swift','java']
for(const key in programming){
    console.log(programming[key])
}