import { useEffect, useState } from 'react';
import {fetchAnimals} from "~/apis/animal-api";
import {AnimalCardList} from "~/components/animal-card-list";


export default function AppFavorites() {
    const [animals, setAnimals] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Rufe die Tierdaten ab
                const fetchedAnimals = await fetchAnimals();
                // Setze die geladenen Daten im State
                setAnimals(fetchedAnimals);
            } catch (error) {
                console.error('Error fetching animals:', error);
            }
        };

        // Rufe die fetchData-Funktion auf, um die Daten zu laden, wenn die Komponente montiert wird
        fetchData();
    }, []);

    return (
        <>
            <h1>Meine Favoriten</h1>
            <p className="text-muted-foreground text-sm">Finde deinen besten Freund.</p>

            <AnimalCardList animals={animals} />
        </>
    );
}
