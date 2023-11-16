export default function createIteratorObject(report) {
  const emp = report.allEmployees;
  const keys = [];
  for (const key in emp) {
    if (Array.isArray(emp[key])) {
      for (const val of emp[key]) {
        keys.push(val);
      }
    } else {
      keys.push(emp[key]);
    }
  }

  return keys;
}
