import {Animal} from "~/models/animal";
import {AnimalCard} from "~/components/animal-card";

export function AnimalCardList({ animals }) {
    return (
        <>
            <div className="mt-5 flex card-list">
                {animals ? (
                    <ul>
                        {animals.map((animal, index) => (
                            <AnimalCard key={index} animal={animal}/>
                        ))}
                    </ul>
                ) : (
                    // Ansonsten zeige einen Ladeindikator oder eine Meldung an
                    <p>Loading animals...</p>
                )}
            </div>
        </>
    );
}
