import app from './app';
import databaseConnection from './typeOrm.config';
import { createConnection } from 'typeorm';

const PORT = process.env.PORT || 3000;

databaseConnection
    .then(() => app.listen(PORT))
    .catch(console.error);
// createConnection().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// }).catch(error => console.log('TypeORM connection error: ', error));
