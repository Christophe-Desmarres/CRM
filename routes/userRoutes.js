const router = require('express').Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const {UserModel} = require('../models/userModel');
const uploadController = require('../controllers/uploadController');
//  npm i -s multer@2.0.0-rc.1
const multer = require('multer');
const upload = multer();


// autentification
router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);


// crud
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// upload
router.post('/upload', upload.single('file'),uploadController.uploadProfil)

module.exports = router;