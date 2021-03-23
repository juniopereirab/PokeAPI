import {Request, Response} from 'express';

export default {
    async getWelcomeMessage(req: Request, res: Response): Promise<Response> {
        return res.send("Welcome to PokeAPI - Damaso");
    }
}