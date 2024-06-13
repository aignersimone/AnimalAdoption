import { useLoaderData } from '@remix-run/react';
import { fetchAnimals } from "~/apis/animal-api";
import { AnimalCardList } from "~/components/animal-card-list";
import { LoaderFunctionArgs } from "@remix-run/node";
import Tabs from "~/components/tabs";
import { useState } from 'react';

export async function loader({ request }: LoaderFunctionArgs) {
    const animals = await fetchAnimals();
    return { animals };
}

export default function AppLibrary() {
    const data = useLoaderData<typeof loader>();
    const animals = data.animals;

    const [selectedTab, setSelectedTab] = useState('Dog'); // Standardmäßig den Tab 'Dog' auswählen

    // Tabs for filtering
    const tabs = [
        { id: 'Dog', title: 'Dogs' },
        { id: 'Cat', title: 'Cats' },
        { id: 'Rabbit', title: 'Rabbits' },
    ];

    // Handle tab change
    const handleTabChange = (tabId) => {
        setSelectedTab(tabId);
    };

    // Filter animals based on selected tab
    const filteredAnimals = animals ? animals.filter(animal => animal.type === selectedTab) : [];

    return (
        <>
            <h1>Unsere Vergabetiere</h1>
            <p className="text-muted-foreground text-sm">Choose your partner for life.</p>
            <Tabs className="my-4" tabs={tabs} activeTabId={selectedTab} onValueChange={handleTabChange} />
            <AnimalCardList animals={filteredAnimals} />
        </>
    );
}
