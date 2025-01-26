
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
products.push("Webcam"); // Add a new product
products.pop(); // Remove the last product
console.log("Updated products:", products);

// cc_2.js
let scores = [85, 90, 78, 92, 88];
scores[1] = 95; // Update second score

// Calculate the average
let sum = scores.reduce((total, score) => total + score, 0);
let average = sum / scores.length;

console.log("Updated scores:", scores);
console.log("Average score:", average);

let employee = {
    name: "Alice",
    age: 30,
    department: "HR",
    isActive: true
};
employee.department = "IT"; 
employee.position = "Team Lead"; 

console.log("Updated employee:", employee);

let customers = [
    { name: "John Doe", email: "john@example.com", purchaseAmount: 150 },
    { name: "Jane Smith", email: "jane@example.com", purchaseAmount: 200 },
    { name: "Sam Wilson", email: "sam@example.com", purchaseAmount: 300 }
];
customers.push({ name: "Emily Davis", email: "emily@example.com", purchaseAmount: 250 });

console.log("Customer list:", customers);

