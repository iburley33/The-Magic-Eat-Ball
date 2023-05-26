const router = require('express').Router();
const {
    getFavorites,
    saveRestaurant,
    deleteRestaurant,
} = require('../../controllers/restaurant-controllers');
const {
    login,
    createUser,
} = require('../../controllers/user-controllers')

// import middleware
const authMiddleware = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveRestaurant);

router.route('/login').post(login);

//router.route('/me').get(authMiddleware, getSingleUser);

router.route('/restaurant/:restaurantId').delete(authMiddleware, deleteRestaurant);


module.exports = router;
