function myfunction(){
    console.log("Welcome to Horizontal !")
    console.log("I am learning JS")
}
myfunction();

function msgfunction(msg){
    // parameter -> input
    console.log(msg)
}
msgfunction(
    "I love JS"
);

// function--> 2 numbers,sum

function sum(a,b){
    // console.log(a+b)
    s = a + b;
    return s;   // Nothing can be written after the return statement.
    console.log("after return")
}
 let val = sum(4,9);
 console.log(val);

// Arrow Function :

const arrowsum = (a,b)=> {
    console.log(a+b);
};

// Arrow function : 
let arrowmul = (a,b)=> {
    // console.log(a*b);
    return a*b;
};

let printhello = ()=>{
    console.log("Hello world");
}

//  forEach Loop : 

let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val){
    console.log(val);
});

// forEach loop : Arrow function 

let array = ["1,2,4,3,5,6,7","From 1-n values "];

array.forEach((val) => {
    console.log(val);
});

// Arrow Function :  

let Cities = [" pune ","Mumbai","Baroda","Surat"];

Cities.forEach((val,idx)=>{
    console.log(val , idx );
});

// Without Arrow Function :

let cities = [" pune ","Mumbai","Baroda","Surat"];

cities.forEach(function cities (val,idx){
    console.log(val , idx );
});

// Map Method.

let nums = [12,14,16,32,52];

let newArr= nums.map((val)=>{
    return val*2;
});

// Filter Method ; 

// Q. Pick the even numbers from the array.

let number = [1,2,3,4,5,6,7,8,9  ];

let evenarr = number.filter((val)=>{
    return val % 2 === 0;
});

// Reduce Method;

let value= [1,2,3,4,7,21,12];

const output = value.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);