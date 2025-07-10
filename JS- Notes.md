-----> Variables Rules : -------------------1st July 2025

1. Varible names are case sensitive ; "a" & "A" are different .

2. Only letters ,digits ,underscore(_) and dollar($) is allowed.(not even space)

3. Only a letter, underscore(_) or $ should be 1st character.

4. Reserved words cannot be variable names.


-----> let, const & var : 

1. var : Variable can be re-declared & updated . A global scope variable
   
2. let : Variable cannot be re-declared but can be updated . A block variable .

3. const : Variable cannot be re-declared or updated . A block varibale .

-----> Data Types in JS : 

1. Primitive data types (7):

i. Number - 
   - Represents both integer and floating-point numbers.
   - Example: `let num = 42;`
ii.String - 
   - Represents a sequence of characters.
   - Example: `let str = "Hello, World!";`
iii. Boolean - 
   - Represents a logical entity and can have two values: true or false.
   - Example: `let isFollow = true;`
iv. Undefined - 
   - Represents a variable that has been declared but not assigned a value.
   - Example: `let unassigned;`
v. Null -
   - Represents an intentional absence of any object value.
   - Example: `let emptyValue = null;`
vi. BigInt - 
   - Represents integers with arbitrary precision.
   - Example: `let bigNumber = 1234567890123456789012345678901234567890n;`
vii. Symbol -
   - Represents a unique and immutable value, often used as object property keys.
   - Example: `let uniqueKey = Symbol 

2. Non-Primitive data tyes (1):

i. Object - (Array, Function, Date, RegExp, etc.)
    - Represents a collection of properties, where each property is a key-value pair.
   - Represents a collection of key-value pairs.
   - Example: `let person = { name: "Rahul", age: 30 };`

---> Operators in Js : ------------------------4th July 2025

---> Arithmetic Operators : +,-,*,/

a + b --> a & b are operands and '+' is called as opeartor . 

1. Modulus Operator : %
   - Returns the remainder of the division of two numbers.
   - Example: `let remainder = 10 % 3; // remainder is 1.

2. Exponentiation Operator : **
   - Raises the first operand to the power of the second operand.
   - Example: `let power = 2 ** 3; // power is 8 (2 raised to the power of 3).`

3. Increment Operator : ++
   - Increases the value of a variable by 1.
   - Example: `let count = 5; count++; // count is now 6.`
   - Can be used in two forms:
     - Prefix: `++count` (increments before the value is used)
     - Postfix: `count++` (increments after the value is used)
     - Example:
       ```javascript
       let a = 5;
       console.log(++a); // Outputs: 6 (prefix increment)
       console.log(a++); // Outputs: 6 (postfix increment)
       console.log(a);   // Outputs: 7 (after postfix increment)
         ```
4. Decrement Operator : --
   - Decreases the value of a variable by 1.
   - Example: `let count = 5; count--; // count is now 4
   - Can be used in two forms:
     - Prefix: `--count` (decrements before the value is used)
     - Postfix: `count--` (decrements after the value is used)
     - Example:
       ```javascript
       let a = 5;
       console.log(--a); // Outputs: 4 (prefix decrement)
       console.log(a--); // Outputs: 4 (postfix decrement)
       console.log(a);   // Outputs: 3 (after postfix decrement)
         ```
--> Assignment Operators : =, +=, -=, *=, /=, %=, **= 

1. Assignment Operator : =
   - Assigns the value of the right operand to the left operand.
   - Example: `let x = 10;`   
2. Addition Assignment Operator : +=
   - Adds the right operand to the left operand and assigns the result to the left operand.
   - Example: `let x = 10; x += 5; // x is now 15.`
3. Subtraction Assignment Operator : -=
   - Subtracts the right operand from the left operand and assigns the result to the left operand.
   - Example: `let x = 10; x -= 5; // x is now 5.`
4. Multiplication Assignment Operator : *=
   - Multiplies the left operand by the right operand and assigns the result to the left operand.
   - Example: `let x = 10; x *= 2; // x is now 20.`
5. Division Assignment Operator : /=
   - Divides the left operand by the right operand and assigns the result to the left operand.
   - Example: `let x = 10; x /= 2; // x is now 5.`
6. Modulus Assignment Operator : %=
   - Takes the modulus of the left operand by the right operand and assigns the result to the left operand.
   - Returns the remainder of the division of two numbers.
   - Example: `let x = 10; x %= 3; // x is now 1.`
7. Exponentiation Assignment Operator : **=
   - Raises the left operand to the power of the right operand and assigns the result to the left operand.
   - Example: `let x = 2; x **= 3; // x is now 8 (2 raised to the power of 3).` 

--> Comparison Operators : ==, ===, !=, !==, >, <, >=, <=

1. Equality Operator : ==
   - Compares two values for equality, performing type coercion if necessary.
   -If one value is a string and the other is a number, JavaScript will convert the string to a number before comparing.
   - Example: `5 == '5' // true`

2. Strict Equality Operator : ===
   - Compares two values for equality without type coercion (both value and type must match).
   - If one value is a string and the other is a number, they will not be considered equal.
   - Example: `5 === '5' // false`  

3. Inequality Operator : !=
   - Compares two values for inequality, performing type coercion if necessary.
   - Example: `5 != '6' // true

4. Strict Inequality Operator : !==
   - Compares two values for inequality without type coercion (both value and type must not match).
   - Example: `5 !== '5' // true`   

5. Greater Than Operator : >
   - Checks if the left operand is greater than the right operand.
   - Example: `10 > 5 // true`

6. Less Than Operator : <
   - Checks if the left operand is less than the right operand.
   - Example: `5 < 10 // true`

7. Greater Than or Equal To Operator : >=
   - Checks if the left operand is greater than or equal to the right operand.
   - Example: `10 >= 10 // true`  

8. Less Than or Equal To Operator : <=
   - Checks if the left operand is less than or equal to the right operand.
   - Example: `5 <= 10 // true`

--> Logical Operators : &&, ||, !

1. Logical AND Operator : &&
   - Returns true if both operands are true; otherwise, it returns false.
   - Example: `true && false // false`
   - Example with truthiness:
     ```javascript
     let a = 5;
     let b = 10;
     console.log(a > 0 && b < 20); // true (both conditions are true)
     console.log(a < 0 && b < 20); // false (first condition is false)
     ```
     ```javascript

2. Logical OR Operator : ||
   - Returns true if at least one of the operands is true; otherwise, it returns false.
   - Example: `true || false // true`
   - Example with truthiness:
     ```javascript
     let a = 5;
     let b = 10;
     console.log(a > 0 || b < 20); // true (first condition is true)
     console.log(a < 0 || b < 20); // true (second condition is true)
     console.log(a < 0 || b > 20); // false (both conditions are false)
     ```
     ```javascript

3. Logical NOT Operator : !
   - Inverts the truthiness of the operand (true becomes false, and false becomes true).
   - Example: `!true // false`   
   - Example with truthiness:
     ```javascript
     let a = 5;
     console.log(!a); // false (a is truthy, so !a is false)
     console.log(!0); // true (0 is falsy, so !0 is true)
     console.log(!""); // true (empty string is falsy, so !"" is true)
     ```
---> Conditional Statements : if, else if, else, switch

1. if Statement :
   - Executes a block of code if a specified condition is true.
   - Example:
     ```javascript
     let age = 18;
     if (age >= 18) {
         console.log("You are an adult.");
     }
     ```
2. else if Statement :
   - Specifies a new condition to test if the previous `if` condition is false.
   - Example:
     ```javascript
     let age = 16;
     if (age >= 18) {
         console.log("You are an adult.");
     } else if (age >= 13) {
         console.log("You are a teenager.");
     } else {
         console.log("You are a child.");
     }
     ```
3. else Statement :
   - Executes a block of code if all previous conditions are false.
   - Example:
     ```javascript
     let age = 10;
     if (age >= 18) {
         console.log("You are an adult.");
     } else {
         console.log("You are not an adult.");
     }
     ```
4. switch Statement :
   - Evaluates an expression and executes the corresponding case block based on the value.
   - Example:
     ```javascript
     let day = 3;
     switch (day) {
         case 1:
             console.log("Monday");
             break;
         case 2:
             console.log("Tuesday");
             break;
         case 3:
             console.log("Wednesday");
             break;
         default:
             console.log("Invalid day");
     }
     ```

--->Ternary Operator : (Special Conditional Operator)
   - A shorthand for `if-else` statements, used to evaluate a condition and return one of two values.
   - Syntax: `condition ? valueIfTrue : valueIfFalse`
   - Example:
     ```javascript
     let age = 20;
     let status = (age >= 18) ? "Adult" : "Minor";
     console.log(status); // Outputs: Adult
     ```
---> Loops : for, while, do-while 

1. for Loop :
   - Used to iterate over a block of code a specified number of times.
   - Syntax:
     ```javascript
     for (initialization; condition; increment/decrement) {
         // code to be executed
     }
     ```
   - Example:
     ```javascript
     for (let i = 0; i < 5; i++) {
         console.log(i); // Outputs: 0, 1, 2, 3, 4
     }
     ```
2. while Loop :
   - Repeatedly executes a block of code as long as a specified condition is true.
   - Syntax:
     ```javascript
     while (condition) {
         // code to be executed
     }
     ```
   - Example:
     ```javascript
     let i = 0;
     while (i < 5) {
         console.log(i); // Outputs: 0, 1, 2, 3, 4
         i++;
     }
     ```
3. do-while Loop :
   - Similar to the `while` loop, but guarantees that the block of code is executed at least once before checking the condition.
   - Syntax:
     ```javascript
     do {
         // code to be executed
     } while (condition);
     ```
   - Example:
     ```javascript
     let i = 0;
     do {
         console.log(i); // Outputs: 0, 1, 2, 3, 4
         i++;
     } while (i < 5);
     ```             

4. for-of Loop :
   - Used to iterate over iterable objects like arrays, strings, or other collections.
   - Syntax:
     ```javascript
     for (const element of iterable) {
         // code to be executed
     }
     ```
   - Example:
     ```javascript
     const fruits = ["apple", "banana", "cherry"];
     for (const fruit of fruits) {
         console.log(fruit); // Outputs: apple, banana, cherry
     }
     ```
5. for-in Loop :
   - Used to iterate over the properties of an object.
   - Syntax:
     ```javascript         
       for (const key in object) {
          // code to be executed
       }
       ```
   - Example:
     ```javascript
     const person = { name: "Rahul", age: 30 };
     for (const key in person) {
         console.log(`${key}: ${person[key]}`); // Outputs: name: Rahul, age: 30
     }
     ``` 
     
---> Infinite Loop :
   - A loop that runs indefinitely until explicitly stopped or a break condition is met.
   - Example:
     ```javascript
     while (true) {
         console.log("This will run forever unless stopped.");
         // Use a break statement to exit the loop when needed.
         if (someCondition) {
             break;
         }
     }
     ```Eg: 
     ```javascript
     let i = 0;
     while (i < 5) {
         console.log(i); // Outputs: 0, 1, 2, 3, 4
         // No increment, so this will run indefinitely
     }
     ```
--->Strings in JS :
1. String Declaration :
   - Strings can be declared using single quotes, double quotes, or backticks (template literals).
   - Example:
     ```javascript
     let singleQuoteString = 'Hello, World!';
     let doubleQuoteString = "Hello, World!";
     let templateLiteralString = `Hello, World!`;
     ```
2. String Concatenation :
   - Combining two or more strings using the `+` operator.
   - Example:
     ```javascript
     let firstName = "John";
     let lastName = "Doe";
     let fullName = firstName + " " + lastName; // "John Doe"
     ```
3. String Length :
   - The `length` property returns the number of characters in a string.
   - Example:
     ```javascript
     let str = "Hello";
     console.log(str.length); // Outputs: 5           
       ```
4. String Methods :
   - JavaScript provides various built-in methods for string manipulation. Here are some commonly used methods:
   - `toUpperCase()`: Converts the string to uppercase.
     ```javascript
     let str = "hello";
     console.log(str.toUpperCase()); // Outputs: "HELLO"
     ```
   - `toLowerCase()`: Converts the string to lowercase.
     ```javascript
     let str = "HELLO";
     console.log(str.toLowerCase()); // Outputs: "hello"
     ```
   - `trim()`: Removes whitespace from both ends of the string.
     ```javascript
     let str = "   Hello, World!   ";
     console.log(str.trim()); // Outputs: "Hello, World!"
     ```             
---> Template Literals :
   - Template literals allow for multi-line strings and string interpolation using backticks (`` ` ``).
   -It makes it easier to work with strings that include variables or expressions.
   - Syntax: `` `string with ${expression}` ``
   - Example of string interpolation:
     ```javascript
     let name = "John";
     let greeting = `Hello, ${name}!`; // Outputs: "Hello, John!"
     console.log(greeting);
     ```
   - Multi-line string:
     ```javascript
     let multiLineString = `This is a string
     that spans multiple lines.`;
     console.log(multiLineString);
     ```
---> String Escape Characters :
   - Escape characters are used to include special characters in strings.
   - Common escape characters include:
     - `\'`: Single quote
     - `\"`: Double quote
     - `\\`: Backslash
     - `\n`: New line : takes only one space
     - `\t`: Tab : takes only one space

---> String methods in JS : 

- Strings are immutable in JavaScript, meaning that once a string icreated, it cannot be changed. However, you can create new strings baseon existing ones using various methods.

- These are built in functions to mamipulate strings in JavaScript..
1. str.toUpperCase() :
   - Converts all characters in the string to uppercase.
   - Example:
     ```javascript
     let str = "hello";
     console.log(str.toUpperCase()); // Outputs: "HELLO"
     ```
2. str.toLowerCase() :
   - Converts all characters in the string to lowercase.
   - Example:  
     ```javascript
     let str = "HELLO";
     console.log(str.toLowerCase()); // Outputs: "hello"
     ```    
3. str.trim() :
   - Removes whitespace from both ends of the string.
   - Example:  
     ```javascript
     let str = "   Hello, World!   ";
     console.log(str.trim()); // Outputs: "Hello, World!"
     ```    
4.str.slice(start, end) : 
   - returns the part of strim=g between the start and   end indexes.
   - Extracts a section of the string and returns it as a new string.
   - The `start` index is inclusive, and the `end` index is exclusive.
   - Example:
     ```javascript
     let str = "Hello, World!";
     console.log(str.slice(0, 5)); // Outputs: "Hello"
     console.log(str.slice(7)); // Outputs: "World!"
     ```
5.str1.conmcat(str2) :
   - Joins two or more strings together.
   - Example:
     ```javascript
     let str1 = "Hello";
     let str2 = "World";
     console.log(str1.concat(", ", str2)); // Outputs: "Hello, World"
     ```
6.str.replace(searchValue, newValue) :
   - Replaces occurrences of a specified substring with a new substring.
   - Example:
     ```javascript
     let str = "Hello, World!";
     console.log(str.replace("World", "JavaScript")); // Outputs: "Hello, JavaScript!"
     ```
7.str.charAt(index) :
   - Returns the character at the specified index in the string.
   - Example:
     ```javascript
     let str = "Hello";
     console.log(str.charAt(0)); // Outputs: "H"
     ```

---> Arrays in JS : is Mutable 

- Collection of elements, which can be of any data type (numbers, strings, objects, etc.).
- Linear data structure that allows you to store multiple values in a single variable.
- Arrays are zero-indexed, meaning the first element is at index 0.
- Arrays can hold elements of different data types, including numbers, strings, objects, and even other arrays.

example:
```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Outputs: "apple"
console.log(fruits.length); // Outputs: 3
```
--->Looping over an array:
1.for loop:
   - Used to iterate over the elements of an array.
   - Example:
     ```javascript
     let fruits = ["apple", "banana", "cherry"];
     for (let i = 0; i < fruits.length; i++) {
         console.log(fruits[i]); // Outputs: apple, banana, cherry
     }
     ```
2.for of loop:
   - A more concise way to iterate over the elements of an array.
   - Example:
     ```javascript
     let fruits = ["apple", "banana", "cherry"];
     for (const fruit of fruits) {
         console.log(fruit); // Outputs: apple, banana, cherry
     }
     ```
3.for in loop:
   - Used to iterate over the indices of an array.
   - Example:
     ```javascript
     let fruits = ["apple", "banana", "cherry"];
     for (const index in fruits) {
         console.log(`${index}: ${fruits[index]}`); // Outputs: 0: apple, 1: banana, 2: cherry
     }
     ```   
---> Array Methods in JS :
- JavaScript provides a variety of built-in methods to manipulate arrays. Here are some commonly used array methods
1. Array.push(element) :
   - Adds one or more elements to the end of an array.
   - Example:
     ```javascript
     let fruits = ["apple", "banana"];
     fruits.push("cherry");
     console.log(fruits); // Outputs: ["apple", "banana", "cherry"]
     ```
2. Array.pop() :
   - Removes the last element from an array and returns it.
   - Example:  
     ```javascript
     let fruits = ["apple", "banana", "cherry"];
     let lastFruit = fruits.pop();
     console.log(lastFruit); // Outputs: "cherry"
     console.log(fruits); // Outputs: ["apple", "banana"]
     ```
3. Array.toString():
   - Converts the array to a string representation.
   - Example:
     ```javascript
     let fruits = ["apple", "banana", "cherry"];
     console.log(fruits.toString()); // Outputs: "apple,banana,cherry"
     ```
4. Array.concat(array2) :
   - Joins two or more arrays and returns a new array.
   - Example:
     ```javascript
     let fruits1 = ["apple", "banana"];
     let fruits2 = ["cherry", "date"];
     let combinedFruits = fruits1.concat(fruits2);
     console.log(combinedFruits); // Outputs: ["apple", "banana", "cherry", "date"]
     ```
5.Array.unshift(element) :
   - Adds one or more elements to the beginning of an array.
   - Example:
     ```javascript
     let fruits = ["banana", "cherry"];
     fruits.unshift("apple");
     console.log(fruits); // Outputs: ["apple", "banana", "cherry"]
     ```
6. Array.shift() :
   - Removes the first element from an array and returns it.
   - Example:
     ```javascript
       let fruits = ["apple", "banana", "cherry"];    
       let firstFruit = fruits.shift();
       console.log(firstFruit); // Outputs: "apple"
       console.log(fruits); // Outputs: ["banana", "cherry"]
     ```
7.Array.slice(start, end) :
   - Extracts a section of the array and returns it as a new array.
   - The `start` index is inclusive, and the `end` index is exclusive.
   - Example:
     ```javascript
     let fruits = ["apple", "banana", "cherry", "date"];
     let slicedFruits = fruits.slice(1, 3);
     console.log(slicedFruits); // Outputs: ["banana", "cherry"]
     ```   
8. Array.splice(start, deleteCount, item1, item2, ...) :
   - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
   - The `start` index is where the change begins, `deleteCount` is the number of elements to remove, and `item1`, `item2`, etc., are the new elements to add.
   - Example: 
   - Syntax of splice :
   - (start, deleteCount, item1, item2, ...)



       ```javascript
       let fruits = ["apple", "banana", "cherry"];
       fruits.splice(1, 1, "orange", "grape");
       console.log(fruits); // Outputs: ["apple", "orange", "grape", "cherry"]
       ```        
--> Functions in JS :
- A function is a reusable block of code that performs a specific task.
- Functions can take input parameters and return a value.
- Functions can be defined using function declarations or function expressions.

Note : Functions Paramater are like local variablbles of function and have block scope till the function is executed.

1. Arrow Function :
   - A more concise syntax for writing functions introduced in ES6.
   - Syntax: `(parameters) => { /* function body */ }`
   - Example:
     ```javascript
     const add = (a, b) => {
         return a + b;
     };
     console.log(add(5, 3)); // Outputs: 8
     ```

2. forEach loop in arrays : 
   - A method that executes a provided function once for each array element.
   - Syntax: `array.forEach((element) => { /* code to execute */ });`
   - arr.forEach(callBackFunction) - is a method that executes a provided function once for each array element.
   - Note : A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.
   - Example:
     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     numbers.forEach((num) => {
         console.log(num * 2); // Outputs: 2, 4, 6, 8, 10
     });
     ``` 
Note : This is Higher order function or higher order method (HOF / HOM) as it takes a function as an argument and executes it on each element of the array.
3. Function Declaration :
   - A traditional way to define a function using the `function` keyword.
   - Syntax:
     ```javascript
     function functionName(parameters) {
         // function body
     }      
       ```
   - Example:
     ```javascript
     function greet(name) {
         console.log(`Hello, ${name}!`);
     }   
       greet("Harmin"); // Outputs: Hello, Harmin !
       ```
--> Some more Array methods in JS :

1. Map Method :
   - Creates a new array populated with the results of calling a provided function on every element in the calling array.
   - Syntax: `array.map((element) => { /* code to execute */ });`
   - arr.map(callbackFnx(value,index,array)) - is a method that creates a new array populated with the results of calling a provided function on every element in the calling array.
   - Note : A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.
   - Example:
     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const doubled = numbers.map((num) => num * 2);
     console.log(doubled); // Outputs: [2, 4, 6, 8, 10]
     ```
2. Filter Method :
   - Creates a new array with all elements that pass the test implemented by the provided function.
   - Syntax: `array.filter((element) => { /* condition */ });`
   - arr.filter(callbackFnx(value,index,array)) - is a method that creates a new array with all elements that pass the test implemented by the provided function.
   - Example:
     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const evenNumbers = numbers.filter((num) => num % 2 === 0);
     console.log(evenNumbers); // Outputs: [2, 4]    
       ```
3. Reduce Method :
   - Executes a reducer function on each element of the array, resulting in a single output value.
   - Syntax: `array.reduce((accumulator, currentValue) => { /* code to execute */ }, initialValue);`
   - arr.reduce(callbackFnx(accumulator,currentValue,index,array), initialValue) - is a method that executes a reducer function on each element of the array, resulting in a single output value.

   - Example:  
       ```javascript
       const numbers = [1, 2, 3, 4, 5];
       const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
       console.log(sum); // Outputs: 15
       ```  
---> Window Object in JS :
- The `window` object represents the browser window and is the global object in a web browser
- It provides access to the browser's features and functions, such as the document, console, and various browser APIs.
- The `window` object is the top-level object in the JavaScript environment, and all global variables and functions are properties of the `window` object.
- Example:
  ```javascript
  console.log(window.innerWidth); // Outputs the width of the browser window
  console.log(window.innerHeight); // Outputs the height of the browser window
  console.log(window.location.href); // Outputs the current URL of the page
  ``` 

----> DOM Manipulation in JS :
- The Document Object Model (DOM) is a programming interface for web documents.
- It represents the structure of a web page as a tree of objects, allowing JavaScript to interact with and manipulate the content, structure, and style of a web page.
- The DOM provides methods and properties to access and modify HTML elements, attributes, and styles.

--> Selecting DOM Elements :

1. `document.getElementById(id)` :
   - Selects an element by its unique ID.

2. `document.getElementsByClassName(className)` :
   - Selects all elements with the specified class name and returns a live HTMLCollection.

3. `document.getElementsByTagName(tagName)` :
   - Selects all elements with the specified tag name and returns a live HTMLCollection.

4. `document.querySelector(selector)` :
   - Selects the first element that matches the specified CSS selector.

5. `document.querySelectorAll(selector)` :
   - Selects all elements that match the specified CSS selector and returns a static NodeList. 


---> Properties in JS :

1. tagname : erturns tag for element nodes
2. innerText : returns the text content of the element and all its children.
3. innerHTML : returns the plain text or HTML contents in the element.
4. textContent : returns textual content even for hideden elements.
5. className : returns the class name of the element .
6. id : returns the id of the element. 