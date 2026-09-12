console.log("Hello, World!");

var a = 100
a = "Test"
console.log(a);


b = 200
b = "Another Test"
var b = "b re-declared"
console.log(b);

//ES6
let c = 300
//c = "Yet Another Test"
// let c = 400 // This will throw an error because 'c' has already been declared in the same scope
console.log(c);

let d;
d = 500

const x = 600
// x = "TEST"// This will throw an error because 'x' is a constant and cannot be reassigned

// const x = 700 //Error
console.log(x);

//Declaring a function using function declaration
function testLetConst() {
    const x = 700
    let c = 400
    console.log("IN", c, "$", c);
}
testLetConst();
console.log("OUT", c, "$c");

var flag = false
console.log(typeof a)
console.log(typeof c)
console.log(typeof flag)
console.log(typeof testLetConst)

//Declaring a function using function expression
let sayHello = function() {
    console.log("Hello, World! Again");
}
sayHello();

//Declaring a function using arrow function
let greet = () => {
    console.log("Hello, World! Again using Arrow Function");
}
greet();

//Array Handling
let arr = [1, "TWO", 3, 4, "FIVE", null, false, undefined , {}, []]
console.log(arr)
console.log(arr[1])
console.log(arr.length)

var name = undefined
console.log(name)
console.log(typeof name)

let obj = null //Object Type
console.log(obj)
console.log(typeof obj)

let city = {} //Object Type
console.log(city)
console.log(typeof city)

//Map
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
let newnumbers = numbers.map((num) => num * 2)
console.log(newnumbers)

//Filter
let evenNumbers = numbers.filter((n) => n % 2 === 0)
console.log(evenNumbers)

//Reduce
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

//ForEach
const outNumbers = numbers.map((num) => num * 2)
    .filter((n) => n > 2)
//.forEach((num) => console.log(num))

console.log(outNumbers)