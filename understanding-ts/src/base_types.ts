enum Role { ADMIN, READ_ONLY, AUTHOR, TESTER}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
} = {
    name: "Ico",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    role: Role.TESTER
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby);
}

console.log(person.role);