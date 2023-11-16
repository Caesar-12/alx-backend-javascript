export default function iterateThroughObject(reportWithIterator) {
  let names;
  for (const value of reportWithIterator) {
    if (!names) {
      names = `${value}`;
    } else {
      names = `${names} | ${value}`;
    }
  }
  return names;
}
