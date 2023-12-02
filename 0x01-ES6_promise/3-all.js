import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([up, cu]) => {
      console.log(`${up.body} ${cu.firstName} ${cu.lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
