//DATES

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// console.log(typeof myDate);

let myCreatedDate = new Date("01-13-2026 12:00:00");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());

// `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;

newDate.toLocaleString('default', 
    {weekday:'long', month:'short', 
        day:'numeric', year:'numeric',
         hour:'numeric', 
         minute:'numeric',
         second:'numeric'}
)

console.log(newDate);