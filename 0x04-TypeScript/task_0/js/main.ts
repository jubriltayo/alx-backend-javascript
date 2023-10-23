// create Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create students
const student1: Student = {
    firstName: "Jubril",
    lastName: "Tayo",
    age: 99,
    location: "Ogun"
}

const student2: Student = {
    firstName: "Ben",
    lastName: "Carson",
    age: 40,
    location: "USA"
}

// create an array of student with Student interface
const studentsList: Student[] = [student1, student2];

// render a table for each elements in the array
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const thRow = document.createElement('tr');
const firstNameCol = document.createElement('th');
const lastNameCol = document.createElement('th');
const ageCol = document.createElement('th');
const locationCol = document.createElement('th');

// create labels to the table columns
firstNameCol.textContent = 'First Name';
lastNameCol.textContent = 'Last Name';
ageCol.textContent = 'Age';
locationCol.textContent = 'Location'

// create labels in table row header
thRow.appendChild(firstNameCol);
thRow.appendChild(lastNameCol);
thRow.appendChild(ageCol);
thRow.appendChild(locationCol);

// append to table head
thead.appendChild(thRow);

// append new row to table body
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const lastNameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    lastNameCell.textContent = student.lastName;
    ageCell.textContent = String(student.age);
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);

    tbody.appendChild(row)
});

// append head and body to table
table.appendChild(thead);
table.appendChild(tbody);

// append table to document
document.body.appendChild(table);