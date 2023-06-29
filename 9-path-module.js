const path = require("path");

console.log(path.sep);
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// Provide the absolute path for the last file
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
