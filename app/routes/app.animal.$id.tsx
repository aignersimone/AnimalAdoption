
import { fetchAnimalById } from '~/apis/animal-api';
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {Link} from "@remix-run/react";
import {Animal} from "~/models/animal";

export default function AnimalDetailPage() {
    const { id } = useParams<{ id: string }>();

    const [animalDetails, setAnimalDetails] = useState<Animal | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchAnimalById(id).then((animal) => {
                setAnimalDetails(animal);
                setLoading(false);
            }).catch((error) => {
                console.error(error);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!animalDetails) {
        return <div>Error: Animal not found</div>;
    }

    return (
        <div>
            <h1>{animalDetails.name}</h1>
            <p>Alter: {animalDetails.age}</p>

            <Link to="/app">Zurück zu den Tieren</Link>
        </div>
    );
}
