import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((result) => { process.stdout.write(`${result.body} `); })
    .catch(() => { console.log('Signup system offline'); });

  createUser()
    .then((result) => { console.log(`${result.firstName} ${result.lastName}`); })
    .catch(() => { console.log('Signup system offline'); });
}
