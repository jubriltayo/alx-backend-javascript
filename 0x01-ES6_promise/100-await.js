import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadResponse = await uploadPhoto();
    const createResponse = await createUser();

    return {
      photo: uploadResponse,
      user: createResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
