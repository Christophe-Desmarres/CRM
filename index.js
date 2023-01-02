const express = require('express');
// pour utiliser les variables d'environnement
require('dotenv').config({
    path: './config/.env'
});
const app = express();
require('./config/db');

const customerRoutes = require('./routes/customerController');
const userRoutes = require('./routes/userRoutes');

// pour formater le body des requetes
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware pour traiter les données sous format json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// utiliser cors() sans condition donne accès à tous
// sinon ex : cors({origin: 'https://monsite.com'})
app.use(cors());

// routes
app.use('/customers', customerRoutes);
app.use('/api/user', userRoutes);


// server
app.listen(process.env.PORT, () => console.log(`server started: ${process.env.PORT}`));