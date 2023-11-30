#!/usr/bin/env node

const fs = require('fs');

async function readDatabase(path) {
  let data = '';
  try {
    data = await fs.promises.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  // get data line by line excluding the first row (with column title)
  const getLine = data.split('\n').slice(1);
  console.log(`Number of students: ${getLine.length - 1}`);
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
  return fieldData;
}

export default readDatabase;
