// simple output
console.log("hi");

// fetch data
fetch("https://www.example.com").then((res) => res.json());

// calculate sum from a number array using reduce
const array = [1, 2, 3, 4, 5];
console.log(array.reduce((prev, cur) => prev + cur, 0)); // 15
