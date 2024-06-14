import { createAction, createReducer } from '@reduxjs/toolkit';
import { Animal } from '~/models/animal';

//Definiere den Typ für den Favoritenstatus
type AnimalFavorite = 'fav' | 'notFav';

//Definiere den Typ für den Zustand der Favoriten
type FavoriteState = {
    favoriteAnimals: Animal[]; // Liste der favorisierten Tiere
};

//Erstelle eine Aktion zum Hinzufügen eines Tieres zu den Favoriten
export const favAction = createAction<{ animal: Animal }>('favorites/fav');

//Erstelle eine Aktion zum Entfernen eines Tieres aus den Favoriten
export const notFavAction = createAction<{ animalId: string }>('favorites/notFav');

//Definiere den Anfangszustand
const initialState = {
    favoriteAnimals: [],
} as FavoriteState;

//Erstelle den Reducer für die Favoritenverwaltung
const favoriteReducer = createReducer(initialState, (builder) => {
    //Behandle die Aktion zum Hinzufügen eines Favoriten
    builder.addCase(favAction, (state, action) => {
        state.favoriteAnimals.push(action.payload.animal);
    });
    //Behandle die Aktion zum Entfernen eines Favoriten
    builder.addCase(notFavAction, (state, action) => {
        state.favoriteAnimals = state.favoriteAnimals.filter(animal => animal.id !== action.payload.animalId);
    });

});

export default favoriteReducer;
