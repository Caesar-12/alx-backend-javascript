import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const retObj = {};

  await uploadPhoto()
    .then((result) => {
      retObj.photo = result;
    })
    .catch(() => {
      retObj.photo = null;
    });

  await createUser()
    .then((result) => {
      retObj.user = result;
    })
    .catch(() => {
      retObj.user = null;
    });

  return retObj;
}
