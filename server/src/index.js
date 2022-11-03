import App from './app.js';
import {sequelize} from '../database/database.js'
//import '../models/Favorites.js'

async function main(){
    try {
        await sequelize.sync();
        console.log('Connected to database!');
        App.listen(5000);
        console.log('Server on Listening on port', 5000);
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }
}

main();