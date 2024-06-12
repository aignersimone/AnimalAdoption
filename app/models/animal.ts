import {boolean} from "zod";

export type Animal = {
        id: string;
        name: string;
        age: string;
        gender: string;
        castrated: string;
        type: string;
        breed: string;
        image: string;
        description: string;
        location: string;
        liked: boolean;
};