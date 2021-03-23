import {Document, Schema, model} from 'mongoose';

interface IPokemon extends Document {
    name: string;
    gender: string;
    type: string;
    height: number;
    weight: number;
    photo: string;
}

const PokemonSchema = new Schema<IPokemon>({
    name: {
        type: String,
        required: [true, "Field is required"]
    },
    gender: {
        type: String,
        required: [true, "Field is required"]
    },
    type: {
        type: String,
        required: [true, "Field is required"]
    },
    height: {
        type: Number,
        required: [true, "Field is required"]
    },
    weight: {
        type: Number,
        required: [true, "Field is required"]
    },
    photo: {
        type: String,
        required: [true, "Field is required"]
    }
});

export const Pokemon = model<IPokemon>("Pokemon", PokemonSchema);