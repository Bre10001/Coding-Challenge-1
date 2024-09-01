// Task 1 Variables and Data Types

let employeeName = "John Doe";
const employeeID = 1;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));

//Task 2 Compound Data Types

let products = ["Mini Purse", "Tote Bag", "Luggage"];
const productDetails = {
            name: "blu",
            price: 2400,
            inStock: true, 
};

console.log(products, productDetails);

//Task 3 Assignment Operators

let accountBalance = 20000;
console.log('accountBalance:', accountBalance); //initial account balance

accountBalance += 1000; // add 1000 to account balance
console.log('accountBalance:', accountBalance);

accountBalance -= 3000; // minus 3000 from account balance
console.log('accountBalance:', accountBalance);

accountBalance *= 5;
console.log('accountBalance:', accountBalance); // multiply account balance by 5

accountBalance %= 22
console.log('accountBalance:', accountBalance); // mod account balance by 22

//Task 4: Comparison Operators

let employeeScore1 = 3
let employeeScore2 = 5

console.log(employeeScore1 > employeeScore2); // determining if employeeScore1 is greater than employeeScore 2. Output: false

console.log(employeeScore1 < employeeScore2); // determining if employeeScore1 is less than employeeScore 2. Output: true

console.log(employeeScore1 >= employeeScore2); // determining if employeeScore1 is greater than or equal to employeeScore 2. Output: false

console.log(employeeScore1 <= employeeScore2); // determining if employeeScore1 is less than or equal to employeeScore 2. Output: true

console.log(employeeScore1 === employeeScore2); // determining if employeeScore1 is strictly equal to employeeScore 2. Output: false

console.log(employeeScore2 != employeeScore1); // determining if employeeScore1 is strictly equal to employeeScore 2. Output: true


