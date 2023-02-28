// source : https://www.youtube.com/watch?v=SUPDFHuvhRc

const express = require('express');
// pour formater le body des requetes
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// pour utiliser les variables d'environnement
require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/authMiddleware');
const app = express();
const customerRoutes = require('./routes/customerController');
const userRoutes = require('./routes/userRoutes');

// source : https://www.freecodecamp.org/french/news/comment-creer-une-appli-react-avec-un-backend-node-guide-complet/
// pour deployer une appli react + node
// const path = require('path');
// Pour demander à Node de servir les fichiers à partir du build de React
// app.use(express.static(path.resolve(__dirname, './client/build')));


// middleware pour traiter les données sous format json
app.use(bodyParser.json());

// pour lire les url
app.use(bodyParser.urlencoded({extended: true}));

// pour lire les cookies
app.use(cookieParser());

// const corsOption = {
//     origin: process.env.CLIENT_URL,
//     credentials: true,            //access-control-allow-credentials:true
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false 
//     }

// utiliser cors() sans condition donne accès à tous
// sinon ex : cors({origin: 'https://monsite.com'})
// app.use(cors(corsOption));
app.use(cors({
    origin: true,
    credentials: true
}));

// verif jwt de l'utilisateur sur toutes les routes
// app.get('*', checkUser);
//verif présence token en cookies
app.get('/jwtid', requireAuth, (req, res)=>{
    res.status(200).send(res.locals.user._id);
});

// routes
app.use('/customers', customerRoutes);
app.use('/api/user', userRoutes);

// source : https://www.freecodecamp.org/french/news/comment-creer-une-appli-react-avec-un-backend-node-guide-complet/
// pour deployer une appli react + node
// Pour les requêtes non traitées par le code précédent, ceci affiche l'appli React
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   });


// server
app.listen(process.env.PORT, () => console.log(`server started: ${process.env.PORT}`));