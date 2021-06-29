import * as process from 'process'

const n = 256;

const arg = process.argv.slice(2)
if (arg.length != 3) {
    console.log("Invalid number of parameters");
    process.exit(1);
}
if (arg.indexOf("7") != -1 || arg.indexOf("11") != -1 || arg.indexOf("17") != -1) {
    console.log("Invalid parameters (You must exclude 7, 11 and 17)");
    process.exit(1);
}
const fizzNum = Number(arg[0]);
const buzzNum = Number(arg[1]);
const fezzNum = Number(arg[2]);

function fizz(num: number, messageParts: string[]): string[] {
    if (num % fizzNum == 0) {
        messageParts.push("Fizz");
    }
    return messageParts; 
}

function buzz(num: number, messageParts: string[]): string[] {
    if (num % buzzNum == 0) {
        messageParts.push("Buzz");
    }
    return messageParts;
}

function bang(num: number, messageParts: string[]): string[] {
    if (num % 7 == 0) {
        messageParts.push("Bang");
    }
    return messageParts;
}

function bong(num: number, messageParts: string[]): string[] {
    if (num % 11 == 0) {
        messageParts = ["Bong"];
    }
    return messageParts;
}

function fezz(num: number, messageParts: string[]): string[] {
    if (num % fezzNum == 0) {
        messageParts.unshift("Fezz");
    }
    return messageParts;
}

function reverseOn17(num: number, messageParts: string[]): string[] {
    if (num % 17 == 0) {
        messageParts.reverse();
    }
    return messageParts;
}

function checkNoRuleApplied(num: number, messageParts: string[]): string[] {
    if (messageParts.length == 0) {
        messageParts.push(num.toString());
    }
    return messageParts;
}

for (let i = 1; i <= n; i += 1) {
    let message: string[] = [];
    message = fizz(i, message);
    message = buzz(i, message);
    message = bang(i, message);
    message = bong(i, message);
    message = fezz(i, message);
    message = reverseOn17(i, message);
    message = checkNoRuleApplied(i, message);
    console.log(message.join(""));
}