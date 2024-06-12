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

    //Tabs für die Filterung
    const tabs = [
        { id: 'Dog', title: 'Dogs' },
        { id: 'Cat', title: 'Cats' },
        { id: 'Rabbit', title: 'Rabbits' },
    ];

    //
    const handleTabChange = (tabId) => {
        setSelectedTab(tabId);
    };

    // Filtere wenn der Typ vom Animal übereinstimmt
    const filteredAnimals = animals ? animals.filter(animal => animal.type == selectedTab) : [];

    return (
        <>
            <h1>Unsere Vergabetiere</h1>
            <p className="text-muted-foreground text-sm">Choose your partner for life.</p>
            <Tabs className="my-4" tabs={tabs} activeTabId={selectedTab} onValueChange={handleTabChange} />
            <AnimalCardList animals={filteredAnimals}/>
        </>
    );
}
