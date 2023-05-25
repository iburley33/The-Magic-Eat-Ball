const { Restaurant } = require('');
const { User } = require('');

module.exports = {

    // get users favorite restaurants
    async getFavorites({ user, body}, res) {

    },



    // save favorite restaurants
    async saveRestaurant({ user, body }, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedRestaurants: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedUser);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },


    // delete favorite restaurants
    async deleteRestaurant({ user, params }, res) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedReataurants: { restaurantId: params.restaurantId } } },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedUser);
    },
};
