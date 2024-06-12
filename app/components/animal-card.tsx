import { Animal } from '~/models/animal';
import React, { useState } from 'react';
type AnimalCardInput = {
    animal: Animal;
};

export function AnimalCard({ animal }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-4 card">
            <img src={animal.image} alt={animal.name} className="w-full" />
            <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-xl">{animal.name}</div>
                    <button onClick={toggleFavorite} className="favoriten">
                        {isFavorite ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 fill-current" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 fill-current" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.18L12 21z"/>
                            </svg>
                        )}
                    </button>
                </div>
                <p className="text-gray-700 text-base">
                    <b>Age: </b> {animal.age}<br />
                    <b>Gender:</b> {animal.gender}<br />
                    <b>Breed:</b> {animal.breed}<br />
                    <b>Location:</b> {animal.location}
                </p>
            </div>
        </div>
    );
}

export default AnimalCard;

