function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

// let combineValues : Function;

// being more specific about the function type, requires 2 params of type number,
// returns a number.
let combineValues : (a: number, b: number) => number;

combineValues = add;

// therefore, printResult cannot be assigned to combineValues.
// combineValues = printResult;

printResult(add(5, 12));

console.log(combineValues(5, 13));