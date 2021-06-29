var n = 256;
var message;
function fizz(num, msg) {
    if (num % 3 == 0) {
        message.push("Fizz");
    }
    return msg;
}
function buzz(num, msg) {
    if (num % 5 == 0) {
        msg.push("Buzz");
    }
    return msg;
}
function bang(num, msg) {
    if (num % 7 == 0) {
        msg.push("Bang");
    }
    return msg;
}
function bong(num, msg) {
    if (num % 11 == 0) {
        msg = ["Bong"];
    }
    return msg;
}
function fezz(num, msg) {
    if (num % 13 == 0) {
        msg.unshift("Fezz");
    }
    return msg;
}
function reverse_on_17(num, msg) {
    if (num % 17 == 0) {
        msg.reverse();
    }
    return msg;
}
for (var i = 1; i <= n; i += 1) {
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
