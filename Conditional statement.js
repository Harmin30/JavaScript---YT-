// ---> Conditional Statements : if, else if, else, switch

let age = 19;

if (age >= 18) {
    console.log("You can drive")
}

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black"
}
else {
    color = "white"
}
console.log(color);

let AGE=22;

if (age >= 18) {
    console.log("You are an adult");
}
else if (age >= 13) {
    console.log("You are an teenager")
}
else {
    console.log("You are a child")
}

// odd or even
let num = 20;
num+=1;
num*=11;
num-=1;

if (num%2 ===0 ){
    console.log(num ,"is even")
}
else{
    console.log(num,"is odd")
}

// --->Ternary Operator :
let Age = 25;
let result = age>=18?"adult" : "not adult";
console.log(result)