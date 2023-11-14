export default function createEmployeesObject(departmentName, employees) {
  const empObj = {
    [`${departmentName}`]: employees,
  };

  return empObj;
}
