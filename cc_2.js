
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
