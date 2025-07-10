// let name = prompt("Hello , Your name");
// console.log(name);
// .....................................................................................
// Q1. Get user to input a number using prompt("entre a number:").Check if the
// number is a multiple of 5 or not .

// let num = prompt("enter a number");
// // console.log(num);
// // num=Number(num)


// if (num % 5 === 0){
//     console.log(num ,"is Multiple of 5");
// }
// else{
//     console.log(num, "is not a Multiple of 5")
// }
// ....................................................................................

// Q2.write a code which can give grades to students according to their scores.

// let marks=prompt("Enter your marks") 
// let grade;

// if(marks>=90 && marks<=100){
//     // console.log("Grade A");
//     grade = "A";
// }
// else if(marks>=70 && marks<=89){
//     // console.log("Grade B");
//     grade="B";
// }
// else if(marks>=60 && marks<=69 ){
//     // console.log("Grade C");
//     grade="C";
// }
// else if (marks>=50 && marks<=59){
//     console.log("Grade D");
//     grade="D";
// }
// else{
//     // console.log("Grade F")
//     grade="F"
// }
// console.log("According to your marks, Your Grade is :",grade);

// .....................................................................................

// Q3.Print all even numbers from 0 to 100


// for(i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("num is : ",i)
//     }
// }
// .....................................................................................

// Q4.Print all odd numbers from 0 to 100

// for(i=0;i<=100;i++){
//     if(i%2!=0){
//         console.log("num is : ",i)
//     }

// }
// .....................................................................................

// Q5. Create a game where yoo start with any randorm game numbr.Ask the user to keep gusessing the game number until the uer enters correct value.

// let gameNumber = 15;

// let usernum = prompt("guess the game number :")
// console.log(usernum)

// while(usernum!=gameNumber){
//     usernum = prompt("You entered wrong number .guess the game number :")
// }

// console.log("Congrats,You entered the right number");

// .....................................................................................

// Q6.Prompt the user to enter their full name.Generate a username for them based on the input. Start username with @,followed by their full name and ending with the fullname length.
// 
//  Eg: user name ="harminpatel" ,username should be"@harminpatel11"

// fullname = prompt("enter your full name : ");


// fullname = fullname.trim();
// username = console.log("@" + fullname + fullname.length);

// .....................................................................................

// Q7.For a given array with marks of students > [85,34,54,64,63,98]
// Find the average of the entire class.

// let marks = [85,34,54,64,63,98];
// let sum=0;

// for(let val of marks){
//     sum+=val;
// }
// let avg = sum /marks.length;
// console.log("Sum of the marks is : ",sum);
// console.log(`Avg marks of the class = ${avg}`)

// .....................................................................................

// Q.8 For a given array with prices of 5 items - [250,645,300,900,50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying the offer .
// Tip : using for loop will be easier than for of loop.

// let price = [250,645,300,900,50];

// for(let i=0; i < price.length;i++){
//     let offer = price[i]/10;
//     price[i]-=offer;
// }
// console.log(price);

// .....................................................................................

// Q.9 Create an array to store companies --> "Bloomberg" ,"Microsoft","Uber","Google","IBM","Netflix"

// 1. Remove the first company from the array
// 2.Remove Uber and add OLA in its place
// 3.Add Amazon at the end.

// let companies = ["Bloomberg" ,"Microsoft","Uber","Google","IBM","Netflix"]

// 1. Remove the first company from the array
// console.log(companies.splice(1));

// 2.Remove Uber and add OLA in its place

// companies.splice(2,1,"OLA");
// console.log(companies)

// 3.Add Amazon at the end.

// companies.push("amazon");
// console.log(companies)


// .....................................................................................

// Q10. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string . 

// function countvowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }
// .....................................................................................

// Q.11 Create an arrow function to create the same task.

// const countvow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }

// .....................................................................................

// Q.12 For a given array of numbers , print the square of each value using the 
// forEach loop

// let nums = [ 21,42,13,54,65];

// nums.forEach((num)=>{
//     console.log(num*num);
// });

// .....................................................................................

// Q.13. We are given array of marks of students. Filter out the marks of students that scored 90+.

// let marks = [67,89,65,99,85,95,93];

// let topper = marks.filter((val) => {
//     return val > 90 ;
// });
// console.log(topper);

// .....................................................................................

// Q.14 Take a number n as input from the user . Create an array of numbers from 1 to n.

// 1. Use the reduce method to calculate sum of all numbers in the array.
// 2. Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number : ");
let arr = [];

for (let i=1;i<=n;i++){
    arr[i-1]=i;
    // return arr;
}
console.log(arr);

// Sum of the Array : 

let sum = arr.reduce((prev,curr) => {
    return prev + curr;
});
console.log("Sum of the array : ", sum);

// Product / Factorial of the Array; 

let arrproduct = arr.reduce((prev,curr) => {
    return prev * curr;
})
console.log("Product / Factorial of the array : ",arrproduct);

