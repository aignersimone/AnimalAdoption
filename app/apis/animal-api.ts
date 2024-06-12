import { z } from 'zod';

// Definiere das Schema für Tierdaten
const animalSchema = z.object({
    name: z.string(),
    age: z.string(),
    gender: z.string(),
    castrated: z.string(),
    type: z.string(),
    breed: z.string(),
    image: z.string(),
    description: z.string(),
    location: z.string(),
    liked: z.string(),
});

// Definiere das Schema für das Array von Tierdaten
const animalsSchema = z.array(animalSchema);

// Funktion zum Abrufen von Tierdaten
export async function fetchAnimals() {
    try {

        // Lade die Tierdaten von einer API oder einer lokalen JSON-Datei
        const response = await fetch('/animals.json');
        const animals = await response.json();

        // Überprüfe, ob die geladenen Daten dem definierten Schema entsprechen
        const parsedAnimals = animalsSchema.parse(animals);

        // Gib die geparsten Tierdaten zurück
        return parsedAnimals;
    } catch (error) {
        // Behandele Fehler, falls der Abruf fehlschlägt
        console.error('Error fetching animals:', error);
        throw error;
    }
}
