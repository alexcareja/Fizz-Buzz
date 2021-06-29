const n = 256;
let message: string[];

function fizz(num: number, msg: string[]): string[]{
    if (num % 3 == 0) {
        message.push("Fizz");
    }
    return msg; 
}

function buzz(num: number, msg: string[]): string[]{
    if (num % 5 == 0) {
        msg.push("Buzz");
    }
    return msg;
}

function bang(num: number, msg: string[]): string[]{
    if (num % 7 == 0) {
        msg.push("Bang");
    }
    return msg;
}

function bong(num: number, msg: string[]): string[]{
    if (num % 11 == 0) {
        msg = ["Bong"];
    }
    return msg;
}

function fezz(num: number, msg: string[]): string[]{
    if (num % 13 == 0) {
        msg.unshift("Fezz");
    }
    return msg;
}

function reverse_on_17(num: number, msg: string[]): string[]{
    if (num % 17 == 0) {
        msg.reverse();
    }
    return msg;
}

for (let i = 1; i <= n; i += 1) {
    message = [];
    message = fizz(i, message);
    message = buzz(i, message);
    message = bang(i, message);
    message = bong(i, message);
    message = fezz(i, message);
    message = reverse_on_17(i, message);
    if (message.length == 0) {
        message.push(i.toString());
    }
    console.log(message.join(""));
}