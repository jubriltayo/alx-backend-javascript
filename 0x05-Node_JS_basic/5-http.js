#!/usr/bin/env node
// Create an HTTP server

const http = require('http');
const fs = require('fs');

const app = http.createServer(async (request, response) => {
  const path = request.url;
  const filename = process.argv[2];
  response.setHeader('Content-Type', 'text/plain');
  if (path === '/') {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  } if (path === '/students') {
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
  }
  return response.end();
});

app.listen(1245, '0.0.0.0', () => console.log('running'));

module.exports = app;
