// simple output
console.log("hi");

// fetch data
fetch("https://www.example.com").then((res) => res.json());

// calculate sum from a number array using reduce
const array = [1, 2, 3, 4, 5];
console.log(array.reduce((prev, cur) => prev + cur, 0)); // 15

// Leetcode #1: Two Sum
const twoSum = (array, target) => {
  const map = {};

  for (const i in array) {
    if (map[target - array[i]])
      return [map[target - array[i]], i];
    map[array[i]] = i;
  }
};
