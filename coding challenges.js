//Coding task 1 - reverse string
//function to reverse string
reverseString = (str) => str.split('').reverse().join('');
 
//print output
console.log(reverseString("John"));
console.log(reverseString("James"));

//Coding task 2 - reverse array
//my solution
function reverseArray(array){
    var output = [];
    for (var i = array.length-1; i >= 0; i--){
        output.push(array[i]);
}
return output;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["I", "like", "JavaScript"]));
//jorge solution

const newReverseArray = (array) => array.reverse();
console.log(newReverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//Coding task 3 - output most expensive item calculated by price*stock

 
function mostExpensive(item) {
    //set variables
    let highestPrice= 0.0
    let itemNum=0
    //iterate through each item
    for (var i = 0; i < item.length; i++) {
        //for each item multiply price by stock and check against current highest
    if ((item[i].stock * item[i].price)> highestPrice) {
        highestPrice = (item[i].stock * item[i].price);
        itemNum = i;
    }
}
console.log(item[itemNum]);
}

const item = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ]

 mostExpensive(item)




 

