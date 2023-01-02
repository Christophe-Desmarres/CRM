const express = require('express');
// pour utiliser les variables d'environnement
require('dotenv').config({
    path: './config/.env'
})
const app = express();
require('./config/db');
const customerRoutes = require('./routes/customerController')
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware pour passer les données sous format json
app.use(bodyParser.json());
// utiliser cors() sans condition donne accès à tous
// sinon ex : cors({origin: 'https://monsite.com'})
app.use(cors());
app.use('/customers', customerRoutes)

app.listen(process.env.PORT, () => console.log(`server started: ${process.env.PORT}`));