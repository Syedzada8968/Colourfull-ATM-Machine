#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; // Dollar
let myPin = 1234;
console.log(chalk.blue("\n \tWellcome to coding with Muzammil - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\npin is correct, login succesfully!\n"));
    //console.log(`"current account balance is ${myBalance}"`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("insufficient balance"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw succesfully`);
            console.log("Your remaining balance is: " + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your account balance is: " + myBalance);
    }
    else if (operationAns.operation === "fastcash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                type: "list",
                name: "fastCash",
                message: "Select amount",
                choices: ["500", "1000", "2000", "5000", "10000"],
            }
        ]);
        console.log(`"your fast cash amount is ${fastCashAnswer.fastCash}`);
        myBalance -= fastCashAnswer.fastCash;
        console.log(`"your remaining balance is ${myBalance}`);
    }
    ;
}
else {
    console.log(chalk.red("Incorrect pin code, try again!"));
}
