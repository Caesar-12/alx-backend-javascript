import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  const retObj = {};

  uploadPhoto()
    .then((result) => {
      retObj.photo = result;
    })
    .catch(() => {
      retObj.photo = null;
    });

  createUser()
    .then((result) => {
      retObj.user = result;
    })
    .catch(() => {
      retObj.user = null;
    });

  return retObj;
}
