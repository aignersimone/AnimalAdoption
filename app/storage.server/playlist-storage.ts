/* This is only an example and can be deleted */

import { createFeatureStorage } from './storage-utils';

/* Type of the entities that should be stored */
export type Animal = {
  id: string;
  title: string;
  createdAt: string;
  imageUrl: string;
  tracks: string[];
};

/* Create the storage with a unique name */
const animalStorage = createFeatureStorage<Animal>('animal');

/* Expose the functions you need in your application */
export const getAllPlaylists = () => {
  return animalStorage.getAll();
};

export const getPlaylistById = (animalId: string) => {
  return animalStorage.getById(animalId);
};

export const createPlaylist = (title: string) => {
  const date = new Date().toISOString();
  const newPlaylist = { title, createdAt: date, tracks: [], imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/240/240` };
  return animalStorage.create(newPlaylist);
};

export const addTracksToPlaylist = async (playlistId: string, trackIds: string[]) => {
  return animalStorage.update({ id: playlistId, tracks: trackIds });
};

export const deletePlaylist = async (playlistId: string) => {
  return animalStorage.delete(playlistId);
};
