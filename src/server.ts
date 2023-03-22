import 'dotenv/config';
import { app } from './app';
import { AppDataSource } from './data-source';

const PORT = process.env.APP_PORT;

try {
    AppDataSource.initialize().then(() => {

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
} catch (error) {
    console.log(`Erro ao inicializar o servidor: ${error}`);
}

