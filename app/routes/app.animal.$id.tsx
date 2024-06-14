import { LoaderFunctionArgs } from '@remix-run/node';
import { getAnimalById } from '~/storage.server/playlist-storage';
import { useLoaderData } from '@remix-run/react';
import {fetchAnimals} from "~/apis/animal-api";
import { Link } from '@remix-run/react';
import {MoveLeft} from "lucide-react";


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
            <h1 className="mt-8 mb-4">{animal.name}</h1>
            <p className="mb-2"><b>Age: </b> {animal.age}</p>
            <p className="mb-2"><b>Gender:</b> {animal.gender}</p>
            <p className="mb-2"><b>Breed:</b> {animal.breed}</p>
            <p className="mb-2"><b>Castrated:</b> {animal.castrated}</p>
            <p className="mb-2"><b>Location:</b> {animal.location}</p>
            <p className="mb-2"><b>Description:</b> {animal.description}</p>
            <button className="linkbtn my-4">
                <Link to="/app/library">
                    <div className="flex flex-row items-center">
                        <MoveLeft/>Back to adoption animals
                    </div>
                </Link>
            </button>
        </>
    );
}
