export default function getStudentIdsSum(objArr) {
  if (!Array.isArray(objArr)) {
    return [];
  }

  return objArr.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
