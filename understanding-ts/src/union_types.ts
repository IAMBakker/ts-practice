// type alias
type NumString = number | string;

// union types
function combine(input1: NumString, input2: NumString, resultConversion: "as-number" | "as-text"){
    let result;
    if (typeof input1 === "number" && typeof input2 === "number"){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number"){
        return +result;
    } else {
        return result.toString();
    }
}

const combindedAges = combine(30, 26, "as-number");
console.log(combindedAges);

const combindedStringAges = combine("30", "26", "as-number");
console.log(combindedStringAges);

const combinedNames = combine("Henk", "Patrick", "as-text");
console.log(combinedNames);