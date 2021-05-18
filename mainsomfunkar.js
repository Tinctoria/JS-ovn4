const tableBody=document.getElementById("table-body");
const input1=document.getElementById("first-name");
const input2=document.getElementById("last-name");
const input3=document.getElementById("mail-adress");
const add=document.getElementById("add-btn");

function whenClicked() {

    const row =document.createElement("tr");

    const td1=document.createElement("td"); 
    td1.textContent=input1.value; 

    const td2=document.createElement("td"); 
    td2.textContent=input2.value; 

    const td3=document.createElement("td"); 
    td3.textContent=input3.value; 

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    tableBody.appendChild(row);
    
    document.getElementById("first-name").value = '';
    document.getElementById("last-name").value = '';
    document.getElementById("mail-adress").value = '';
}



add.addEventListener("click", whenClicked);