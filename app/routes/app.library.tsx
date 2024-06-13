import { useLoaderData } from '@remix-run/react';
import { fetchAnimals } from "~/apis/animal-api";
import { AnimalCardList } from "~/components/animal-card-list";
import {LoaderFunctionArgs} from "@remix-run/node";


export async function loader({ request }: LoaderFunctionArgs) {
    const animals = await fetchAnimals();
    return { animals };
}

export default function AppLibrary() {
    const data = useLoaderData<typeof loader>();
    const animals = data.animals;



    return (
        <>
            <h1>Unsere Vergabetiere</h1>
            <p className="text-muted-foreground text-sm">Choose your partner for life.</p>

            <AnimalCardList animals={animals}></AnimalCardList>
        </>
    );
}
