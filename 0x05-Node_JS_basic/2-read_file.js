#!/usr/bin/env node
// Synchronous reading of a file, groups of students based on field

const fs = require('fs');

const countStudents = (path) => {
  try {
    // read file from the path with the encoding
    const data = fs.readFileSync(path, 'utf-8');
    // get data line by line excluding the first row (with column title)
    const getLine = data.split('\n').slice(1);
    console.log(`Number of students: ${getLine.length}`);
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
      console.log(`Number of students in ${field}: ${fieldData[field].length}. List: ${fieldData[field]}`);
    });
  } catch (error) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
