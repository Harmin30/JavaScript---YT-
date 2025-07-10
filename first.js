// alert("Welcome to Horizontal,Harmin")
let fullname = "Harmin Patel";
let age = 21;
const price = 199.99;
let r = 14
let x = null;
let y = undefined;
let isFollow = true;
console.log(isFollow);



age = 22
console.log(age)

let a;
console.log(a); /*underfined*/

// const b; /* const cannot be null */
// console.log(b);

{
    let c = 12;
    console.log(c);
}
{
    let c = 21;
    console.log(c)
}

const student = {
    Name : "Harmin Patel", /*Key : Value */
    age : 21,
    cgpa : 8.5,
    isPass: true,

};
student["age"] = student["age"] + 1 ; 
student["name"] = "Patel Harmin Manish"
console.log(student.cgpa)
console.log(student["age"])
console.log(student.name)