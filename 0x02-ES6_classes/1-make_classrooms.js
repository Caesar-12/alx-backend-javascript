import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  firstObj = ClassRoom(19);
  secObj = ClassRoom(20);
  thirdObj = ClassRoom(34);
  const objArr = [firstObj, secObj, thirdObj];

  return objArr;
}
