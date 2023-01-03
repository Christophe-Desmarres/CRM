const router = require('express').Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const {UserModel} = require('../models/userModel');




router.post('/register', authController.signUp);


// read
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;