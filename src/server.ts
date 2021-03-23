import app from './app';
import { PORT } from './constants/pokeAPI.constants'

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));