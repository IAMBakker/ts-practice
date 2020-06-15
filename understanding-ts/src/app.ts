const form = document.forms.namedItem("personInputForm") as HTMLFormElement;

class Person {
    firstName!: string;
    lastName!: string;
    birthDate!: Date;
    emailAddress!: string;
};

let persons: Person[] = [
    { firstName: "Henk", lastName: "Henksma", birthDate: new Date(1963, 4, 13), emailAddress: "email@email.com"}
  ];

form.addEventListener("change", () => {
    console.log(form["dateOfBirthDay"].value)
    if(
        form["firstName"].value !== "" &&
        form["lastName"].value !== "" &&
        form["dateOfBirthDay"].value !== "" &&
        form["dateOfBirthMonth"].value !== "" &&
        form["dateOfBirthYear"].value !== "" &&
        form["email"].value !== ""
    ){
        enableFormSubmitButton();
    }
});

function enableFormSubmitButton(){
    var submitButton = form.children.namedItem("submit")! as HTMLInputElement;
    submitButton.removeAttribute("disabled");
}

function generateTableHead(table: HTMLTableElement, data: string[]) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
  }

  function generateTableBody(table: HTMLTableElement, data: Person[]){
      let tbody = table.createTBody();
      for(let person of data){
        let row = tbody.insertRow();
        generateTableRow(row, person);
    }
}

function generateTableRow(row: HTMLTableRowElement, person: Person){
    let firstNameCell = generateTableCell(person.firstName);
    let lastNameCell = generateTableCell(person.lastName);
    var dateString = person.birthDate.getDate() + "-" + person.birthDate.getMonth() + "-" + person.birthDate.getFullYear();
    let heightCell = generateTableCell(dateString);
    let placeCell = generateTableCell(person.emailAddress);
    let trashCell = generateTrashcan();
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(heightCell);
    row.appendChild(placeCell);
    row.appendChild(trashCell);
}

function generateTableCell(cellText: string){
    let td = document.createElement("td");
    let text = document.createTextNode(cellText);
    td.appendChild(text);
    return td;
  }

function generateTrashcan(){
    let td = document.createElement("td");
    let trash = document.createElement("button");
    trash.textContent = "🗑";
    trash.setAttribute("onclick", "deleteRow(this)");
    td.appendChild(trash);
    return td;
} 

function deleteRow(deleteButton: HTMLButtonElement){
    var td = deleteButton.parentNode; 
    var tr = td!.parentNode; // the row to be removed
    let rowText = tr?.textContent!;
    tr!.parentNode!.removeChild(tr!);
    removeItemFromArray(rowText);
}

/// removing person based on information.
function removeItemFromArray(rowText: string){
    var index = persons.findIndex((person) => {
        return rowText.includes(person.firstName) &&
        rowText.includes(person.lastName) &&
        rowText.includes(person.emailAddress) &&
        rowText.includes(person.birthDate.toString());
    })
    if (index !== -1){
        persons.splice(index, 1);
    }
}

let table = document.getElementById("PersonTable") as HTMLTableElement;
if(persons.length > 0){
    generateTableHead(table, Object.keys(persons[0]));
    generateTableBody(table, persons);
}

function validateForm(){
    if(validateEmail(form["email"].value)){
        // sending data to webserver
    
        // populating table with another row.
        addPersonToTable();
    } else {
        alert("You have entered an invalid email address!")
        return (false)
    }
}

function addPersonToTable(){
    let person = { 
        firstName: form["firstName"].value, 
        lastName: form["lastName"].value, 
        birthDate: new Date(
            form["dateOfBirthYear"].value, 
            form["dateOfBirthMonth"].value, 
            form["dateOfBirthDay"].value), 
        emailAddress: form["email"]
    };
    persons.push(person);
    let tbody = table.tBodies.item(0)!;
    let row = tbody.insertRow();
    generateTableRow(row, person);
}

function validateEmail(email: string)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email);
}