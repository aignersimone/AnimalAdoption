import { createAction, createReducer } from '@reduxjs/toolkit';
import { Animal } from '~/models/animal';

type AnimalFavorite = 'fav' | 'notFav';
type FavoriteState = {
    favoriteAnimals: Animal[]; // Liste der favorisierten Bücher
};

export const favAction = createAction<{ animal: Animal }>('favorites/fav');
export const notFavAction = createAction<{ animalId: string }>('favorites/notFav');

const initialState = {
    favoriteAnimals: [],
} as FavoriteState;

const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(favAction, (state, action) => {
        state.favoriteAnimals.push(action.payload.animal);
    });
    builder.addCase(notFavAction, (state, action) => {
        state.favoriteAnimals = state.favoriteAnimals.filter(animal => animal.id !== action.payload.animalId);
    });

});

export default favoriteReducer;
