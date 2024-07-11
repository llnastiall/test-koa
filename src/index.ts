import app from './app';
import databaseConnection from './typeOrm.config';

const PORT = process.env.PORT || 3000;

databaseConnection
    .then(() => app.listen(PORT))
    .catch(console.error);

