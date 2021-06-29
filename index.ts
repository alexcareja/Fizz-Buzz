const n = 100;
let message: string;

function fizz(num: number): string{
    return num % 3 ? "" : "Fizz"; 
}

function buzz(num: number, msg: string): string{
    return num % 5 ? msg : msg + "Buzz"; 
}

function bang(num: number, msg: string): string{
    return num % 7 ? msg : msg + "Bang";
}

function bong(num: number, msg: string): string{
    return num % 11 ? msg : "Bong";
}

function fezz(num: number, msg: string): string{
    return num % 13 ? msg : "Fezz" + msg;
}

for (let i = 1; i <= n; i += 1) {
    message = fizz(i);
    message = buzz(i, message);
    message = bang(i, message);
    message = bong(i, message);
    message = fezz(i, message);
    if (message.localeCompare("") == 0) {
        message = i.toString();
    }
    console.log(message);
}