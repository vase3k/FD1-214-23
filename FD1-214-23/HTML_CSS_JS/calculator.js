var x = null;
var y = null;
var oper;

function getNumber(number) {
    if (x === null) {
        x = number;
    }
    else {
        y = number;
    };
}

function getOperation(operation) {
    oper = operation
}

function GetResult() {
    switch (oper) {
        case "+": console.log(x + y); break;
        case "-": console.log(x - y); break;
        case "/": console.log(x / y); break;
        case "*": console.log(x * y); break;
    };
}

