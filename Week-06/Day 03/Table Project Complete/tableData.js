let data = [{
    firstName: "Adam",
    lastName: "Smith",
    email: "asmith@gmail.com"
}, {
    firstName: "Lisa",
    lastName: "Brown",
    email: "lbrown@yahoo.com"
}, {
    firstName: "Juan",
    lastName: "Cortez",
    email: "jcortez@gmail.com"
}, {
    firstName: "Maria",
    lastName: "Chan",
    email: "mchan@yahoo.com"
}];


data.forEach(function (element) {
    // create and append table row
    let row = document.createElement("tr");
    mainTable.appendChild(row);
    // create cells for row
    let firstCell = document.createElement("td");
    let lastCell = document.createElement("td");
    let emailCell = document.createElement("td");
    // append cells to row
    row.appendChild(firstCell);
    row.appendChild(lastCell);
    row.appendChild(emailCell);
    // add text to cells
    firstCell.innerHTML = element.firstName;
    lastCell.innerHTML = element.lastName;
    emailCell.innerHTML = element.email;

});