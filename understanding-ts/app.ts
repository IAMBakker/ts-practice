function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

let combineValues;

combineValues = add;
// nice javascript. nice.
combineValues = 5;

printResult(add(5, 12));

console.log(combineValues(5, 13));