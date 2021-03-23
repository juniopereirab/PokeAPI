import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import {MONGO_URL} from './constants/pokeAPI.constants';
import {router} from './routes/pokemon.routes';

const app = express();

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true}));
app.use(cors());
app.use(router);

export default app;
