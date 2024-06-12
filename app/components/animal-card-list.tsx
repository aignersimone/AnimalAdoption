import {Animal} from "~/models/animal";
import {AnimalCard} from "~/components/animal-card";

export function AnimalCardList({ animals }) {

    return (
        <>
            <div className="mt-5 flex card-list">
                {animals ? (
                    <div className="flex flex-wrap ">
                        {animals.map((animal, index) => (
                            <AnimalCard key={index} animal={animal}/>
                        ))}
                    </div>
                ) : (
                    // Ansonsten zeige einen Ladeindikator oder eine Meldung an
                    <p>Loading animals...</p>
                )}
            </div>
        </>
    );
}
