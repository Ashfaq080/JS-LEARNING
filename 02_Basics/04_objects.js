//singleton used when you are developing sinle application like tinder, etc..

// const tinderUser = new Object(); //this is how you decelare objects
const tinderUser = {};  //and this is also a correct way to deceleare object, but this is non singleton object

tinderUser.id = "123Ab"
tinderUser.name = "RAM"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//Accessing the nested objcts
const nestedObject = {
    email: "some@gmail.com",
    userId: "12ka4",
    fullName: {
        userName: "ashfaq#123",
        userFullName: {
            firstName: "ashfaq",
            lastName: "ahmed"
        }
    }
}

//  console.log(nestedObject.fullName.userFullName.firstName);


//  object combine / merge / assign
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "a", 5: "b" };
const obj3 = { 6: "a" };

// const obj4 = {obj1, obj2, obj3}           //this method merge in object.
// const obj4 = Object.assign(obj1,obj2,obj3);  //this method is also good but use empty pernthisys.
// const obj4 = Object.assign({},obj1,obj2,obj3);  //{} this indecates that we have a target object and remaning obj1,obj2,obj3 act as source
const obj4 = { ...obj1, ...obj2, ...obj3 }    //this is spread operator

// console.log(obj4);


//data comes from database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//de-structure and JSON API Intro

// let suppose you have a course object stored in a const variable

const course = {
    courseName: "MEARN STACK DEVELOPER",
    price: "999",
    courseInstructor: "Ashfaq"
}

console.log(course.courseInstructor) // this method we can't write again and again so to d-structure it we use 

// const { courseInstructor } = course
// console.log(courseInstructor); //we can change the key name also

const { courseInstructor: instructor} =course
console.log(instructor);

//this is called de-structureing of object and we have de-structuring of arrya this is maliny used in react.js.


//JSON(JAVASCRIPT OBJECT NOTATION  ) API : intro, in object JS automatically understand that give key data is srting type but in JOSN we have to mentioned that key is a string.

// {
//     "name":"Ashfaq",
//     "email":"ashfaq@gmail.com",
//     "phnum" :"6363*****2"
// } // this is json

[
    {},
    {},
    {},
    {}
]





