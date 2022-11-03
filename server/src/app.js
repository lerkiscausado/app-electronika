import express from 'express';
import routes from '../routes/favorites.routes.js';
import cors from 'cors';
//const cors = require('cors');

const App= express();
App.use(cors());
App.use(express.json())
App.use(express.urlencoded({ extended: true }));

App.use(routes);

export default App;