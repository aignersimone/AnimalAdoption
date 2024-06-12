import { useEffect, useState } from 'react';
import { fetchAnimals } from "~/apis/animal-api";
import Tabs from "~/components/tabs";
import { AnimalCardList } from "~/components/animal-card-list";

export default function AppLibrary() {
    const [animals, setAnimals] = useState(null);
    const [selectedTab, setSelectedTab] = useState('Dog'); // Standardmäßig den Tab 'dog' auswählen

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedAnimals = await fetchAnimals();
                // Setze die geladenen Daten im State -> Herz
                setAnimals(fetchedAnimals);
            } catch (error) {
                console.error('Error fetching animals:', error);
            }
        };
        fetchData();
    }, []);


    // Filtere wenn der Typ vom Animal übereinstimmt
    const filteredAnimals = animals ? animals.filter(animal => animal.liked == true) : [];

    return (
        <>
            <h1>Unsere Vergabetiere</h1>
            <p className="text-muted-foreground text-sm">Choose your partner for life.</p>
            <AnimalCardList animals={filteredAnimals}/>
        </>
    );
}
