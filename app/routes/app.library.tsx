import { useLoaderData } from '@remix-run/react';
import { fetchAnimals } from "~/apis/animal-api";
import { AnimalCardList } from "~/components/animal-card-list";
import { LoaderFunctionArgs } from "@remix-run/node";
import Tabs from "~/components/tabs";
import { useState } from 'react';

//Tierdaten laden
export async function loader({ request }: LoaderFunctionArgs) {
    const animals = await fetchAnimals();
    return { animals };
}

export default function AppLibrary() {
    //Tierdaten mit dem loader laden
    const data = useLoaderData<typeof loader>();
    const animals = data.animals;

    //Selected Tab definieren
    const [selectedTab, setSelectedTab] = useState('Dog'); // Standardmäßig den Tab 'Dog' auswählen

    //Tabs zum filtern
    const tabs = [
        { id: 'Dog', title: 'Dogs' },
        { id: 'Cat', title: 'Cats' },
        { id: 'Rabbit', title: 'Rabbits' },
    ];

    //Handle tab change
    const handleTabChange = (tabId) => {
        setSelectedTab(tabId);
    };

    //Tiere anhand des selektierten Tabs filtern
    const filteredAnimals = animals ? animals.filter(animal => animal.type === selectedTab) : [];

    //Die selektierten Tiere in einer AnimalCardList laden
    return (
        <>
            <h1>Our Adoption Animals</h1>
            <p className="text-muted-foreground text-sm">Choose your partner for life.</p>
            <p className="text-muted-foreground text-sm">Click on the heart to save this Animal in your favorites.</p>
            <Tabs className="my-4" tabs={tabs} activeTabId={selectedTab} onValueChange={handleTabChange} />
            <AnimalCardList animals={filteredAnimals} />
        </>
    );
}
