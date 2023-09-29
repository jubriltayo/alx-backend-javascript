import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const userPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(filename);

  return Promise.allSettled([userPromise, uploadPromise]).then((results) => {
    results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.error,
    }));
  });
}
