const express = require('express');
const { registerController, loginController, logoutController, productApi } = require('../controllers/controllers');
const auth = require('../middleware/auth.js');

const router = express.Router();

// Product routes
router.get("/allproducts", productApi); // Get all products

// Authentication routes
router.post("/register", registerController); // User registration
router.post("/login", loginController); // User login
router.post("/logout", logoutController); // User logout

// Protected route example
router.get("/protected", auth, (req, res) => {
    res.status(200).json({ message: 'Access granted', success: true });
});

module.exports = router;
