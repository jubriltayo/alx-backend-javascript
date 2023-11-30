#!/usr/bin/env node
// Create HTTP server using express

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (request, response) => response.send('Hello Holberton School!'));

app.get('/students', async (request, response) => {
  const filename = process.argv[2];
  response.write('This is the list of our students\n');
  let data = '';
  try {
    data = await fs.promises.readFile(filename, 'utf-8');
  } catch (error) {
    return response.end('Cannot load the database');
  }

  // get data line by line excluding the first row (with column title)
  const getLine = data.split('\n').slice(1);
  response.write(`Number of students: ${getLine.length - 1}\n`);
  // group students based on field of study and print in desired format
  const fieldData = {};
  getLine.forEach((studentRow) => {
    if (studentRow) {
      const studentColumn = studentRow.split(',');
      const firstname = studentColumn[0];
      const field = studentColumn[3];
      if (field in fieldData) {
        // if key(field) is already existing in the dictionary, add firstname to value(array)
        fieldData[field] = fieldData[field].concat(` ${firstname}`);
      } else {
        // if key never exists, create one with value(array)
        fieldData[field] = [firstname];
      }
    }
  });
  const fieldList = Object.keys(fieldData);
  fieldList.forEach((field) => {
    response.write(`Number of students in ${field}: ${fieldData[field].length}. List: ${fieldData[field]}\n`);
  });
  return response.end();
});

app.listen(1245, '127.0.0.1', () => console.log('app is running'));

module.exports = app;
