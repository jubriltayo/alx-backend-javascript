#!/usr/bin/env node

import readDatabase from '../utils';

class StudentController {
  /**
     * StudentController class
     * @methods:
     *  @getAllStudents: returns list of students
     *  @getAllStudentsByMajor: return list of students by major
    */

  static async getAllStudents(request, response) {
    const filename = process.argv[2];
    let output = '';
    try {
      const fieldData = await readDatabase(filename);
      output += 'This is the list of our students\n';
      const sortedField = Object.keys(fieldData).sort();
      sortedField.forEach((field) => {
        const studentNumber = fieldData[field].length;
        const studentList = fieldData[field];
        output += `Number of students in ${field}: ${studentNumber}. List: ${studentList}\n`;
      });
    } catch (error) {
      console.log(error);
      return response.status(500).send('Cannot load the database');
    }
    return response.status(200).send(output);
  }

  static async getAllStudentsByMajor(request, response) {
    // extract parameters from route .e.g. localhost:1245/students/:major where
    // major can be CS or SWE. It then stores the value in dict via destructuring
    const { major } = request.params;
    const filename = process.argv[2];
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fieldData = await readDatabase(filename);
      return response.status(200).send(`List: ${fieldData[major]}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentController;
