const router = require('express').Router();
const saveRestaurant = require('../../controllers/restaurant-controllers');

// import middleware
const authMiddleware = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveRestaurant);

module.exports = router;