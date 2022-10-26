/* Q1 Write an arrow function expression called greet(). It should accept a single argument representing a person's name. It should return a greeting string as shown below:
greet("Hagrid"); //"Hey Hagrid!"
greet("Luna"); //"Hey Luna!" */

let greet = name => "Hey " + name;
 console.log(greet("Harry"));

/* Q2 Convert the function isEven() into an equivalent arrow function.
function isEven(num){
  return num%2 === 0;
}
*/

let isEven = num => {
    return num%2 === 0;
}
console.log(isEven(5));

/*
Q3 Convert the following JavaScript function declaration to arrow function syntax:
function counterFunc(counter) {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }
  
  return counter
}*/

let counterFunc = counter => {
    if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }
  return counter
}



/*
Q4 Write an arrow function for the following JavaScript function:
function nameAge(name, age) {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
}*/

let nameAge = (name, age) => {
    console.log("Hello " + name);
  console.log("You are " + age + " years old");
}
console.log(nameAge("Mary", 12));

/* Q5 Write the arrow function for the following:
function printOnly(){
  console.log("printing");
}*/

let printOnly =>{
    console.log("printing");
}
console.log(printOnly);


/* Q6 Write the arrow function for the following:
function sum(num1, num2){
    return num1 + num2
} 
*/

let sum = (num1, num2) => num1+num2;
console.log(sum(2,5));