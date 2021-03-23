import { Request, Response, Router } from 'express';
import pokemonService from '../services/pokemon.service';

const router = Router();

router.get('/', pokemonService.getWelcomeMessage);


export {router};