function receivesAFunction (callback) {
    console.log(callback());
}

function add() {
    return 7 + 12;
}

receivesAFunction(add);

function returnsANamedFunction() {
     return subtract = function()  {
        return 15 - 10;
    }
}

returnsANamedFunction();


function returnsAnAnonymousFunction() {
    return () => {
        return "anonymous function";
    }
}

returnsAnAnonymousFunction();