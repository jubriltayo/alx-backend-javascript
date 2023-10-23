// create students
var student1 = {
    firstName: "Jubril",
    lastName: "Tayo",
    age: 99,
    location: "Ogun"
};
var student2 = {
    firstName: "Ben",
    lastName: "Carson",
    age: 40,
    location: "USA"
};
// create an array of student with Student interface
var studentsList = [student1, student2];
// render a table for each elements in the array
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var thRow = document.createElement('tr');
var firstNameCol = document.createElement('th');
var lastNameCol = document.createElement('th');
var ageCol = document.createElement('th');
var locationCol = document.createElement('th');
// create labels to the table columns
firstNameCol.textContent = 'First Name';
lastNameCol.textContent = 'Last Name';
ageCol.textContent = 'Age';
locationCol.textContent = 'Location';
// create labels in table row header
thRow.appendChild(firstNameCol);
thRow.appendChild(lastNameCol);
thRow.appendChild(ageCol);
thRow.appendChild(locationCol);
// append to table head
thead.appendChild(thRow);
// append new row to table body
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var lastNameCell = document.createElement('td');
    var ageCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    lastNameCell.textContent = student.lastName;
    ageCell.textContent = String(student.age);
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
// append head and body to table
table.appendChild(thead);
table.appendChild(tbody);
// append table to document
document.body.appendChild(table);
//# sourceMappingURL=main.js.map