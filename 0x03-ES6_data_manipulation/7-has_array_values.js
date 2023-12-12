export default function hasValuesFromArray(set, array) {
  let check;
  for (const val of array) {
    check = false;
    for (const match of set) {
      if (val === match) {
        check = true;
      }
    }
  }
  return check;
}
