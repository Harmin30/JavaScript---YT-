// .............................Arthimetic Operators

let a=8;
let b = 3;
let c = 10

console.log("a = ",a,"b = ",b)
// console.log("a+b = ",a+b);
// console.log("a-b = ",a-b);
// console.log("a*b = ",a*b);
// console.log("a/b = ",a/b);
// console.log("a%b = ",a%b); 
// console.log("a**b = ",a**b);  

//............................. Unary Operator.
// a++;
// console.log("a++",a++);
// console.log("a=",a);

// console.log("--b=",b--);
// console.log("b=",b)

// .............................Assignment Operators.

a+=2;
console.log("a+=2 ",a);
console.log("a = ",a);

b-=2;
console.log("b-=2 ",b);
console.log("b =",b);


a*=3;
console.log("a*=3 ",a);
console.log("a = ",a);

a/=4;
console.log("a /=4 ",a);
console.log("a = ",a);

c%=3;
console.log("c%=3 ",c);
console.log("c = ",c);

a**=2;
console.log("a**=2",a);
console.log("a = ",a);


// Logical operators ;

console.log(a > 0 && b < 20); // true (both conditions are true)     
console.log(a < 0 && b < 20); // false (first condition is false)

console.log(a > 0 || b < 20); // true (first condition is true)
console.log(a < 0 || b < 20); // true (second condition is true)
console.log(a < 0 || b > 20); // false (both conditions are false)

console.log(!a); // false (a is truthy, so !a is false)
console.log(!0); // true (0 is falsy, so !0 is true)
console.log(!""); // true (empty string is falsy, so !"" is true)