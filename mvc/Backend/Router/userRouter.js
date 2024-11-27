const express = require('express');
const { saveData,getData } = require('../controller/userController');

const router = express.Router();

// Define routes
router.post('/users', getData); // Route to create a user
router.get('/users', saveData); // Route to get all users

module.exports = router;