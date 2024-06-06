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
            <p className="text-muted-foreground text-sm">Your home. Your music.</p>

            <AnimalCardList animals={animals}/>
            {/*<div className="mt-5">
                {animals ? (
                    // Wenn die Tierdaten geladen wurden, rendern Sie sie
                    <ul>
                        {animals.map((animal, index) => (
                            <li key={index}>
                                <h2>{animal.name}</h2>
                                <p>Type: {animal.type}</p>
                                <p>Breed: {animal.breed}</p>
                                <img src={animal.image} alt={animal.name} />
                                <p>Description: {animal.description}</p>
                                <p>Location: {animal.location}</p>
                            </li>
                        ))}
                    </ul>
                ) : (

                    // Ansonsten zeige einen Ladeindikator oder eine Meldung an
                    <p>Loading animals...</p>
                )}
            </div>*/}
        </>
    );
}
