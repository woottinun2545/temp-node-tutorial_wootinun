// Globals          - No Window!

// __dirname        - path to current directory
// __filename       - file name
// require          - function to use modules (CommonJS)
// module           - info about current module (file)
// process          - info about env where the program is being executed
console.log(__dirname);
let count = 0;
const intervalId = setInterval(() => {
  count++;
  if (count === 3) {
    clearInterval(intervalId);
  }
  console.log("Hello world");
}, 1000);
