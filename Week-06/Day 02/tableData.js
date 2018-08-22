let data = [{firstName:"Adam",lastName:"Smith",email:"asmith@gmail.com"},{firstName:"Lisa",lastName:"Brown",email:"lbrown@yahoo.com"},{firstName:"Juan",lastName:"Cortez",email:"jcortez@gmail.com"},{firstName:"Maria",lastName:"Chan",email:"mchan@yahoo.com"}];

let mainTable = document.getElementById("mainTable");
let row = document.createElement("tr");
let firstCell = document.createElement("td");
let lastCell = document.createElement("td");
let emailCell = document.createElement("td");
data.forEach(function(element){
    mainTable.appendChild(row);
    firstCell.innerHTML = element.firstName;
    lastCell.innerHTML = element.lastName;
    emailCell.innerHTML = element.email;
    mainTable.appendChild(firstCell);
    mainTable.appendChild(lastCell);
    mainTable.appendChild(emailCell);
})