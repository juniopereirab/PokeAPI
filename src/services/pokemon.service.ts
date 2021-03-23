import {Request, Response} from 'express';

import { Pokemon } from '../schema/Pokemon';

export default {
    async getWelcomeMessage(req: Request, res: Response): Promise<Response> {
        return res.send("Welcome to PokeAPI - Damaso");
    },
    async createPokemon(req: Request, res: Response): Promise <Response>{
        const {name, gender, type, height, weight, photo} = req.body;
        
        try {
            const newPokemon = await Pokemon.create({
                name,
                gender,
                type,
                height,
                weight,
                photo
            });
    
            return res.status(201).json(newPokemon);
        }
        catch (err) {
            return res.status(400).json({message: "Error creating Pokemon"});
        }
    },
    async listPokemon(req: Request, res: Response): Promise <Response> {
        try{
            const pokemons = await Pokemon.find();
            return res.status(200).json(pokemons);
        } catch (err) {
            return res.status(400).json({message: "Error while listing pokemons"});
        }
    }
}