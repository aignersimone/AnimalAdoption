/* This is only an example and can be deleted */
import { createFeatureStorage } from './storage-utils';

/* Type of the entities that should be stored */
export type Animal = {
  id: string;
  name: string;
  age: string;
  gender: string;
  castrated: string;
  type: string;
  breed: string;
  image: string;
  description: string;
  location: string;
};

/* Create the storage with a unique name */
const animalStorage = createFeatureStorage<Animal>('animal');

/* Expose the functions you need in your application */
export const getAllAnimals = () => {
  return animalStorage.getAll();
};

export const getAnimalById = (animalId: string) => {
  return animalStorage.getById(animalId);
};

// export const createAnimal = (name: string) => {
//   const date = new Date().toISOString();
//   const newAnimal = { name, image: `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/240/240` };
//   return animalStorage.create(newAnimal);
// };

// export const addAnimalToAnimal = async (playlistId: string, trackIds: string[]) => {
//   return animalStorage.update({ id: playlistId, tracks: trackIds });
// };

export const deletePlaylist = async (playlistId: string) => {
  return animalStorage.delete(playlistId);
};
