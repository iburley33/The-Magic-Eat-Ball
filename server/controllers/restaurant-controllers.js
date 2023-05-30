const { Restaurant } = require("../models/Restaurant");
const { User } = require("../models/User");
const https = require("https");

module.exports = {
  // get users favorite restaurants
  async getFavorites({ user, body }, res) {
    try {
      const updatedUser = await User.findOne(
        { _id: user._id },
        { savedRestaurants: body }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
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
      { $pull: { savedRestaurants: { restaurantId: params.restaurantId } } },
      { new: true }
    );
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },

  // get restaurants from Foursquare API
  getRestaurants(req, res) {
    let userLocation = req.body.location;
    const options = {
      hostname: "api.foursquare.com",
      port: 443,
      path: `/v2/venues/search?client_id=UWAG0E014D1QTHAGKYCACSKPCJABTAR433HHNJ31V4FZ0QER&client_secret=PCG240WEJ22KDCWQW1NEHRCQAUQNP41NAO1K1OH5JYNNIP3H&v=20230522&near=${encodeURIComponent(userLocation)}&query=restaurant&radius=10000`,
      method: "GET",
    };

    const request = https.request(options, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        res.json(JSON.parse(data));
      });
    });

    request.on("error", (error) => {
      console.error(error);
      res.status(500).send(error.message);
    });

    request.end();
  },
};

