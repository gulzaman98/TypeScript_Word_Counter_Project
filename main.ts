#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const answers: {
    sentence: string
} = await inquirer.prompt([
   {
    
    name: "sentence",
    type: "input",
    message: "Enter your sentenceto count the word"
   } 
])
const words = answers.sentence.trim().split(" ")
console.log(`Your word count is ${words.length}`)
