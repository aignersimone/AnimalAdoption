import { LoaderFunctionArgs } from '@remix-run/node';
import { getAnimalById } from '~/storage.server/playlist-storage';
import { useLoaderData } from '@remix-run/react';
import {fetchAnimals} from "~/apis/animal-api";


export async function loader({ params }: LoaderFunctionArgs) {
    const AnimalId = params['id'];
    if (!AnimalId) {
        throw Error('404');
    }

    //const animal = await getAnimalById(AnimalId);
    const animals = await fetchAnimals();

    const filteredAnimal =  animals.find((animal) => animal.id === AnimalId);

    return { animal: filteredAnimal };
}

export default function AnimalDetail() {
    const data = useLoaderData<typeof loader>();
    const animal = data.animal;

    if (!animal) {
        return <h1>Oops, we could not find your animal</h1>;
    }

    return (
        <>
            <img src={animal.image} alt={animal.name} />
            <h1 className="mb-8">{animal.name}</h1>
            <b>Age: </b> {animal.age}<br />
            <b>Gender:</b> {animal.gender}<br />
            <b>Breed:</b> {animal.breed}<br />
            <b>Location:</b> {animal.location} <br/>
            <b>Description:</b> {animal.description} <br/>
        </>
    );
}
