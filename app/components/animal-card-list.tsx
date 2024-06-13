import {Animal} from "~/models/animal";
import {AnimalCard} from "~/components/animal-card";


type AnimalCardListProperties = { animal: Animal[] };

export function AnimalCardList({ animals }:AnimalCardListProperties) {

    return (
        <>
            <ul className="mt-5 flex card-list">
                {animals ? (
                    <div className="flex flex-wrap ">
                        {animals.map((animal) => (
                            <li key={animal.id}>
                            <AnimalCard  animal={animal}/>
                            </li>
                        ))}
                    </div>
                ) : (
                    // Ansonsten zeige einen Ladeindikator oder eine Meldung an
                    <p>Loading animals...</p>
                )}
            </ul>
        </>
    );
}
