export default function getListStudentIds(objArr) {
  const objId = [];

  if (!Array.isArray(objArr)) {
    return [];
  }

  for (const obj of objArr) {
    objId.push(obj.id);
  }

  return objId;
}
