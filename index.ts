#!/usr/bin/env node

// BASIC CALCULATOR :PERFORM 5 OPRERATORS (+,-,*,/,%)

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division","percentage"],
  },

  
]);
//CONDITIONAL STATEMENTS:

if (answer.operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else if (answer.operator === "percentage"){
  console.log(answer.firstnumber/answer.secondnumber*100);
} else {
  console.log("please select a valid operator");
}

