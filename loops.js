for (let i = 0; i < 5; i++) {

    console.log("Harmin Patel")
}

// Calculate sum of 1 to 5
let sum = 0;
// let n = 6
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum)

// Print 1 to 5 
for (let i = 1; i <= 5; i++) {
    console.log("i = ", i)
}

// for -of -loop
let str = "Harmin"
let size = 0;

for (let i of str) {
    console.log("i=", i);
    size++;
}
console.log("string size = ", size);

// for in loop

let student = { 
    name: "harmin",
    age: 21,
    cgpa:8.9,
    isPass:true,
};

for (let key in student){
    console.log("key = ",key,"value = ",student[key]);

}

