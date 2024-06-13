// app.bookshelf.tsx
import { Animal } from '~/models/animal';
import { AnimalCardList } from '~/components/animal-card-list';
import { useAppSelector } from '~/store.client/store';



export default function AppFavorites() {
    const favoriteAnimals = useAppSelector((state) => state.favorite.favoriteAnimals);

    return (
        <>
            <h1>Marked Animals</h1>
            <p className="text-muted-foreground text-sm">Your favorite Animals.</p>

            <div className="mt-5">
                <AnimalCardList animal={favoriteAnimals}></AnimalCardList>
            </div>
        </>
    );
}
