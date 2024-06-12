import { useEffect, useState } from 'react';
import {fetchAnimals} from "~/apis/animal-api";
import {AnimalCard} from "~/components/animal-card";
import {AnimalCardList} from "~/components/animal-card-list";


export default function AppLibrary() {
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
            <h1>Unsere Vergabetiere</h1>
            <p className="text-muted-foreground text-sm">Choose your partner for life.</p>

            <AnimalCardList animals={animals}/>
        </>
    );
}
