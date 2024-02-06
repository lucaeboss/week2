import process = require('process');

if (process.argv.length !== 5) {
    console.error("Usage: node calculator.ts [add/subtract/multiply/divide] [number1] [number2]");
    process.exit(1);
}

const operation: string = process.argv[2];
let num1: number;
let num2: number;

try {
    num1 = parseFloat(process.argv[3]);
    num2 = parseFloat(process.argv[4]);
} catch (error) {
    console.error("Invalid input. Please enter numbers for the second and third arguments.");
    process.exit(1);
}

if (isNaN(num1) || isNaN(num2)) {
    console.error("Invalid numbers provided.");
    process.exit(1);
}

let result: number;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        if (num2 === 0) {
            console.error("Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.error("Invalid operation. Please choose add, subtract, multiply, or divide.");
        process.exit(1);
}

console.log(`The result is: ${result}`);
