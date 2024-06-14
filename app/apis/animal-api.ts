import { z } from 'zod';

// Definiere das Schema für Tierdaten
const animalSchema = z.object({
    id: z.string(),
    name: z.string(),
    age: z.string(),
    gender: z.string(),
    castrated: z.string(),
    type: z.string(),
    breed: z.string(),
    image: z.string(),
    description: z.string(),
    location: z.string(),
});

// Definiere das Schema für das Array von Tierdaten
const animalsSchema = z.array(animalSchema);

// Funktion zum Abrufen von Tierdaten
export async function fetchAnimals() {
        // Lade die Tierdaten von einer API oder einer lokalen JSON-Datei
        const response = await fetch("https://animal-api-u6u2.onrender.com/my-api/animals.json");
        const animals = await response.json();

        // Überprüfe, ob die geladenen Daten dem definierten Schema entsprechen
        const parsedAnimals = animalsSchema.parse(animals);

        // Gib die geparsten Tierdaten zurück
        return parsedAnimals;
}

// Funktion zum Abrufen eines Tieres anhand der ID
export async function fetchAnimalById(animalId: string) {
    // Lade die Tierdaten von einer API oder einer lokalen JSON-Datei
    const response = await fetch("https://animal-api-u6u2.onrender.com/my-api/animals.json");
    if (!response.ok) {
        throw new Error('Failed to fetch animals');
    }

    //Filtere die Tiere nach der ID
    const animals = await response.json();
    console.log(animals);
    const animal = animals.find((animal: { id: string }) => animal.id === animalId);
    console.log(animal)
    if (!animal) {
        throw new Error(`Animal with ID ${animalId} not found`);
    }

    // Überprüfe, ob die geladenen Daten dem definierten Schema entsprechen
    const parsedAnimals = animalSchema.parse(animal);

    // Gib die geparsten Tierdaten zurück
    return parsedAnimals;
}
