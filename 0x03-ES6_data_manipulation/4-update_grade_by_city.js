export default function updateStudentGradeByCity(objArr, city, newGrades) {
  let newArr = [];
  if (!Array.isArray(objArr)) {
    return [];
  }

  newArr = (objArr.filter((objId) => objId.location === city).map((obc) => {
    const hold = obc;
    for (const grades of newGrades) {
      if (hold.id === grades.studentId) {
        hold.grade = grades.grade;
      }
    }
    if (!hold.grade) {
      hold.grade = 'N/A';
    }
    return hold;
  }));

  return newArr;
}
