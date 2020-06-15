let buttonClicked = false;
const button = document.getElementById("buttonId")!;

class Mountain {
    name!: string;
    height!: number;
    place!: string;
};

let mountains: Mountain[] = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

button.addEventListener("click", () => {
    buttonClicked = true;
    button.setAttribute("disabled", "true");
    console.log("The button was clicked!")
});

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

  function generateTableBody(table: HTMLTableElement, data: Mountain[]){
      let tbody = table.createTBody();
      for(let mountain of data){
        let row = tbody.insertRow();
        let nameCell = generateTableCell(mountain.name);
        let heightCell = generateTableCell(mountain.height.toString());
        let placeCell = generateTableCell(mountain.place);
        let trashCell = generateTrashcan();
        row.appendChild(nameCell);
        row.appendChild(heightCell);
        row.appendChild(placeCell);
        row.appendChild(trashCell);
    }
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

/// removing the mountain based on name and height. not the best solution.
function removeItemFromArray(rowText: string){
    var mountainIndex = mountains.findIndex((mountain) => {
        return rowText.includes(mountain.name) &&
        rowText.includes(mountain.height.toString());
    })
    if (mountainIndex !== -1){
        mountains.splice(mountainIndex, 1);
    }
}

let table = document.getElementById("MountainTable") as HTMLTableElement;
generateTableHead(table, Object.keys(mountains[0]));
generateTableBody(table, mountains);