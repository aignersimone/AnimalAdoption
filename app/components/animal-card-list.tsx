import {Animal} from "~/models/animal";
import {AnimalCard} from "~/components/animal-card";

//Definiere den Input der AnimalCardList
type AnimalCardListProperties = { animal: Animal[] };

export function AnimalCardList({ animals }:AnimalCardListProperties) {

    //Gib die fertige Komponente zurück
    return (
        <>
            <ul className="mt-5 flex justify-left flex-wrap gap-4 card-list">
                {animals ? (
                    animals.map((animal) => (
                        <li key={animal.id} className="list-none">
                            <AnimalCard animal={animal} />
                        </li>
                    ))
                ) : (
                    // Show a loading indicator or a message if no animals are available
                    <p>Loading animals...</p>
                )}
            </ul>
        </>
    );
}
