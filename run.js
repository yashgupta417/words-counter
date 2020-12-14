import wordCounter from "./index.js"
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter String: ", function (s) {
    console.log("Word Count: ", wordCounter(s))
    rl.close();
});
