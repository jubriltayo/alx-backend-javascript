export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const gradeObj = newGrades.find((grade) => student.id === grade.studentId);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  });
}
