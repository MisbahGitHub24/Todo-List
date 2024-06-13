#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition) {
  let todoQuestions = await inquirer.prompt([
    {
      name: "todos",
      type: "input",
      message: "What you want to add in your Todos ?",
      validate: function (input: string) {
        if (input.trim() === "") {
          return "Please enter a valid todo item.";
        }
        return true;
      },
    },
    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add more..?",
      default: "true",
    },
  ]);
  todos.push(todoQuestions.todos);
  // Display the todos in a formatted list
  console.log("Your Todos:");
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`); // Print each todo with a number
  });

  condition = todoQuestions.addMore;
}
