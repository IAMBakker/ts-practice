// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Ico",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    role: [2, "Tester"]
};

person.role.push("Admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby);
}