const express = require('express');
const { registerController, loginController, logoutController, productApi } = require('../controllers/controllers');

const router = express.Router();

// Product routes
router.get("/allproducts", productApi); // Get all products

// Authentication routes
router.post("/register", registerController); // User registration
router.post("/login", loginController); // User login
router.post("/logout", logoutController); // User logout



module.exports = router;
