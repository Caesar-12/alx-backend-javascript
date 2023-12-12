export default function getStudentsByLocation(objArr, city) {
  if (!Array.isArray(objArr)) {
    return [];
  }

  return objArr.filter((objId) => objId.location === city);
}
