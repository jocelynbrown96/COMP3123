//Object Literal
let person = {
    name: "John",
    age: 30,
    city: "New York",
    null: null,
    undefined: undefined,
    "full name": "John Doe",

    displayInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    },

    // Arrow function does not have its own 'this' context,
    // it uses the 'this' value from the enclosing lexical context
    displayArrow: () => {
        console.log(this)
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
};
console.log(typeof person);
console.log(person);
person.displayInfo();
person.displayArrow();

console.log(person.name);
console.log(person["name"]);
console.log(person.null)
console.log(person["full name"])
const fnm = "full name"
console.log(person[fnm])

//Destructuring Assignment
const {
    name,
    age,
    city: myCityName,
    null:n
} = person

console.log(name, age, myCityName, n)

//More about functions
function printData(fnm, lnm, city){
    this.name = fnm
    console.log(`this: ${this}, ${this.name}`)
    console.log(`First Name: ${fnm}, Last Name: ${lnm}, City: ${city}`);

    console.log(arguments)
    console.log(`arguments[0]: ${arguments[0]}, arguments[1]: ${arguments[1]}, arguments[2]: ${arguments[2]}`);
}

printData("Pritesh", "Patel", "Toronto")

let printDataArrow = (fnm, lnm, city) => {
    console.log(`First Name: ${fnm}, Last Name: ${lnm}, City: ${city}`);

    //console.log(arguments) // Error: arguments is not defined in arrow functions
}

printDataArrow("Pritesh", "Patel", "Toronto")