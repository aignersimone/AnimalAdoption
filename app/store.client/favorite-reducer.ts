import { createAction, createReducer } from '@reduxjs/toolkit';
import { Animal } from '~/models/animal';

type AnimalFavorite = 'favorite' | 'notFavorite';
type FavoriteState = {
    favoriteAnimals: Animal[]; // Liste der favorisierten Bücher
};

export const favAction = createAction<{ animal: Animal }>('favorites/favorite');
export const notFavAction = createAction<{ animalId: string }>('favorites/notFavorite');

const initialState = {
    favoriteAnimals: [],
} as FavoriteState;

const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(favAction, (state, action) => {
        state.favoriteAnimals.push(action.payload.animal); // Füge das Buch zur Liste der favorisierten Bücher hinzu
    });
    builder.addCase(notFavAction, (state, action) => {
        state.favoriteAnimals = state.favoriteAnimals.filter(animal => animal.id !== action.payload.animalId);
    });

});

export default favoriteReducer;
