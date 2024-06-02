// Import inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull Welcome message
console.log(chalk.bold.cyanBright("\n \t\t Word Counter - by Haniya"));
console.log("=".repeat(60));

// Prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

// Trimmimng the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));