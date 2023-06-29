// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// import { john, peter } from "./4-name";
// import { sayHi } from "./5-utils";

const names = require("./4-name.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alternatives-flavor.js");

// This will automatically run the function inside it
require("./7-mind-grenade.js");

console.log("This is data");
console.log(data);
console.log("This is name");
console.log(names);
sayHi.sayHi("susan");
sayHi.sayHi(names.john);
sayHi.sayHi(names.peter);
