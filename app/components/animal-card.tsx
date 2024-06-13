import { Animal } from '~/models/animal';
import { favAction, notFavAction } from '~/store.client/favorite-reducer';
import { useAppDispatch, useAppSelector } from '~/store.client/store';
import {Heart, HeartOff} from "lucide-react";
import {Link} from "@remix-run/react";

type AnimalCardInput = {
    animal: Animal;
};

export function AnimalCard({ animal }: AnimalCardInput) {
    const dispatch = useAppDispatch();
    const favoriteAnimals = useAppSelector((state) => state.favorite.favoriteAnimals);
    const isFavorite = favoriteAnimals.some(favoriteAnimal => favoriteAnimal.id === animal.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(notFavAction({ animalId: animal.id }));
        } else {
            dispatch(favAction({ animal: animal }));
        }
    };



    return (

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-4 card">
                <Link to={`/app/animal/${animal.id}`} className="card_link">
                <img src={animal.image} alt={animal.name} className="w-full" />
                </Link>
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="font-bold text-xl">{animal.name}</div>
                        <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite}></FavoriteButton>
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

type FavoriteButtonProps = { isFavorite: boolean; onClick?: () => void };
function FavoriteButton({ isFavorite = false, onClick }: FavoriteButtonProps) {
    return (
        <button type="button" className="icon-button" onClick={onClick}>
            {isFavorite ? <Heart strokeWidth={1.5} /> : <HeartOff strokeWidth={1.5} />}
        </button>
    );
}


