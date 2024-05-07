#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentenceto count the word"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(`Your word count is ${words.length}`);
