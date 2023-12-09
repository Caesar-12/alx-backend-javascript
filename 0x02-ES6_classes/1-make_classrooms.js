import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const firstObj = ClassRoom(19);
  const secObj = ClassRoom(20);
  const thirdObj = ClassRoom(34);
  const objArr = [firstObj, secObj, thirdObj];

  return objArr;
}
