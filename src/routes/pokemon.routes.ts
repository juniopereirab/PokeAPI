import { Request, Response, Router } from 'express';
import pokemonService from '../services/pokemon.service';

const router = Router();

router.get('/', pokemonService.getWelcomeMessage);
router.get('/pokemons', pokemonService.listPokemon);
router.post('/pokemon', pokemonService.createPokemon);


export {router};