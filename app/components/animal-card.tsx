import { Animal } from '~/models/animal';
import { favAction, notFavAction } from '~/store.client/favorite-reducer';
import { useAppDispatch, useAppSelector } from '~/store.client/store';
import {Link} from "@remix-run/react";
import {FaHeart, FaRegHeart} from "react-icons/fa";


//Definiere den Input der AnimalCard
type AnimalCardInput = {
    animal: Animal;
};

//Definiere die AnimalCard
export function AnimalCard({ animal }: AnimalCardInput) {
    const dispatch = useAppDispatch();
    const favoriteAnimals = useAppSelector((state) => state.favorite.favoriteAnimals);
    const isFavorite = favoriteAnimals.some(favoriteAnimal => favoriteAnimal.id === animal.id);

    //Favorite-Handler - der immer bei Klick den Favoriten-Status auf dan Gegenteiligen umsetzt
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(notFavAction({ animalId: animal.id }));
        } else {
            dispatch(favAction({ animal: animal }));
        }
    };

    //Gib die fertige Komponente zurück
    return (
        <div className="w-96 rounded overflow-hidden shadow-lg mx-auto mb-4 card">
            <Link to={`/app/animal/${animal.id}`} className="card_link block">
                <img src={animal.image} alt={animal.name} className="w-full h-64 object-cover" />
            </Link>
                <div className="px-6 py-4 bg-white">
                    <div className="flex justify-between items-center mb-2">
                        <div className="font-bold text-xl">{animal.name}</div>
                        <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
                    </div>
                    <p className="text-gray-700 text-base">
                        <b>Age: </b> {animal.age}<br />
                        <b>Gender:</b> {animal.gender}<br />
                        <b>Breed:</b> {animal.breed}<br />
                        <b>Location:</b> {animal.location}
                    </p>
                </div>
        </div>
    );
}

//Definition des Favorite Buttons -> entweder volles oder leeres Herz von "react-icons/fa"
type FavoriteButtonProps = { isFavorite: boolean; onClick?: () => void };
function FavoriteButton({ isFavorite = false, onClick }: FavoriteButtonProps) {
    return (
        <button type="button" className="icon-button" onClick={onClick}>
            {isFavorite ? <FaHeart  /> : <FaRegHeart  />}
        </button>
    );
}


