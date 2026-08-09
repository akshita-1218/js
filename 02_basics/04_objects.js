//const tinderUser=new Object();//singleton object

const tinderUser={} //non singleton object

tinderUser.id="123abc";
tinderUser.name="Akshita";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Akshita",
            lastname:"Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

const obj3={...obj1,...obj2};
// console.log(obj3);

// console.log(Object.assign(obj1,obj2));

// console.log(Object.assign({},obj1,obj2));

const obj4= {...obj1,...obj2};
// console.log(obj4);

const users=[
    {
        id:1,
        email:"some@gmail.com"
    },
    {
        id:2,
        email:"another@gmail.com"
    }
]
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    courseName:"js in hindi",
    price:999,
    courseInstructor:"Akshita Sharma",
}
// course.courseInstructor

const{courseInstructor : Instructor}=course;
// console.log(courseInstructor);
console.log(Instructor);

console.log(course.courseInstructor);