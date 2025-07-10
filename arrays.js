let marks = [98,78,87,45,99,66];
    console.log(marks);

let heroes=["ironman","thor","hulk","spiderman"];
console.log(heroes);

// for loop

for(let idx=0 ; idx<marks.length; idx++){
    console.log(marks[idx]);
}

// for of loop :

for(let el of heroes){
    console.log(el);
}
let cities=["delhi","pune","mumbai","baroda","surat"]

for(let city of cities){
    console.log(city.toUpperCase());
}

let fooditems = ["Potato","banana","cherry"]
let fruits= ["mango","cherry","litchi"]

fooditems.push("watermelon","mango");
console.log(fooditems);

fooditems.pop();
console.log(fooditems);

console.log(fooditems.toString());

let combinedfruits = fooditems.concat(fruits);
console.log(combinedfruits);