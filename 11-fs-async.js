// This is asynchronous method
console.log("\nThis is asynchronous method");
// The callback function will run once the readFile is completed.
const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(`This is error: ${error}`);
    return null;
  } else {
    console.log("This is callback function");
    console.log(result);
    const first = result;
    readFile("./content/second.txt", "utf-8", (error, result) => {
      if (error) {
        console.log(`This is error: ${error}`);
        return null;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `${first}\n${second}\n`,
          (error, result) => {
            if (error) {
              console.log("This is error: " + error);
              return null;
            } else {
              console.log(result);
            }
          }
        );
      }
    });
  }
});
