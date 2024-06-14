import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {fetchAnimals} from "~/apis/animal-api";
import { Link } from '@remix-run/react';
import {MoveLeft} from "lucide-react";


export async function loader({ params }: LoaderFunctionArgs) {
    //aufgerufene AnimalId laden
    const AnimalId = params['id'];
    //Fehler falls keine ID vorhanden
    if (!AnimalId) {
        throw Error('404');
    }

    //alle Animals laden
    const animals = await fetchAnimals();

    //das Tier mit der aufgerufenen ID aus allen Tieren suchen
    const filteredAnimal =  animals.find((animal) => animal.id === AnimalId);

    //Das geladenene Tier zurückgeben
    return { animal: filteredAnimal };
}

export default function AnimalDetail() {
    //Die Daten des Tieres mit dem loader laden
    const data = useLoaderData<typeof loader>();
    const animal = data.animal;

    //wenn kein Tier erhalten wurde
    if (!animal) {
        return <h1>Oops, we could not find your animal</h1>;
    }

    //Darstellung der Animal-Detailseite mit einem "zurück" Button
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
                        <MoveLeft/> <p className="ml-3">Back to adoption animals</p>
                    </div>
                </Link>
            </button>
        </>
    );
}
