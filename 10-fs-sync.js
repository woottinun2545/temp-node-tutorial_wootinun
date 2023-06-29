// This is synchronous method

const { readFileSync, writeFileSync } = require("fs");

console.log("This is synchronous method");
const firstContent = readFileSync("./content/first.txt", "utf8");
const secondContent = readFileSync("./content/second.txt", "utf-8");
console.log("This is the content of the first file");
console.log(firstContent);
console.log("This is the content of the second file");
console.log(secondContent);

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result ${firstContent + "\n" + secondContent}`,
//   { flag: "a" }
// );
