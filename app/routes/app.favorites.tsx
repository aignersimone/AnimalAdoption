import { Animal } from '~/models/animal';
import { AnimalCardList } from '~/components/animal-card-list';
import { useAppSelector } from '~/store.client/store';


export default function AppFavorites() {
    //alle Tiere laden, die den status "Favorit" haben
    const favoriteAnimals = useAppSelector((state) => state.favorite.favoriteAnimals);
    //console.log(favoriteAnimals)

    //Alle Favoriten-Tiere in der AnimalCardList laden
    return (
        <>
            <h1>Marked Animals</h1>
            <p className="text-muted-foreground text-sm">Your favorite Animals.</p>
            <div className="mt-5">
                <AnimalCardList animals={favoriteAnimals}></AnimalCardList>
            </div>
        </>
    );
}
