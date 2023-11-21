const fs = require('fs');

let data;
function countStudents(path) {
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const rows = [];
  const details = {};
  for (const row of data.split('\n').slice(1)) {
    if (row) {
      rows.push(row);
    }
  }
  for (const students of rows) {
    const fName = students.split(',')[0];
    const dept = students.split(',')[3];
    if (!details[dept]) {
      details[dept] = { count: 1, list: [fName] };
    } else {
      details[dept].count += 1;
      details[dept].list.push(fName);
    }
  }
  console.log(`Number of students: ${rows.length}`);
  for (const std in details) {
    if (std) {
      const stdCount = details[std].count;
      const stdList = details[std].list;
      console.log(`Number of students in ${std}: ${stdCount}. List: ${stdList.join(', ')}`);
    }
  }
}

module.exports = countStudents;
