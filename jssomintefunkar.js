const input1=document.getElementById("first-name");
const input2=document.getElementById("last-name");
const input3=document.getElementById("mail-adress");
const add=document.getElementById("add-btn");

function createTableData(input1, input2, input3) {
    const td1=document.createElement("td"); 
    td1.textContent=input1; 
    const td2=document.createElement("td"); 
    td2.textContent=input2; 
    const td3=document.createElement("td"); 
    td3.textContent=input3; 
    return td1, td2, td3; 
}


function createRow() {
    const row =document.createElement("tr"); 
    return row; 
}

function insertRow(row, parent) {
    parent.appendChild(row);
}

const myRow=createRow(); 
insertRow(myRow, document.body.insertBefore());

function whenAdded() {
    createRow(createTableData());
    insertRow();
}

add.addEventListener("clicked", whenAdded);