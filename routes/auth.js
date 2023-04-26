const express = require('express');
const router = express.Router();

const connection = require('../database/connection');
const {
    hashPassword,
    comparePassword,
} = require('../helpers/hash');

function validateRegisterRequest(req, res, next) {
    if (req.body.username && req.body.password) {
        return next();
    }

    return res.status(400).json({ message: 'Error validating' });
}

// Login
router.post('/register', [
    validateRegisterRequest,
], async function (req, res, next) {

    // Get info from request body

    // Check if user with that username already existed

        // If yes: Response to user

        // If no
            // + Hash password with random salt
            // + Create user in db
            // + Response to user

});

router.post('/login', async function (req, res, next) {
    // Get username, password from request body

    // Check if user exists

        // If no: response

        // If yes:
            // Compare password, here we hash the password from (request body + salt),
            // then compare with the hashedPassword store in db

            // If password is match:
                // Sign a jwt
                // Response

            // If password is not match:
                // Response
});

module.exports = router;
