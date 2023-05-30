const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedRestaurants` array in User.js
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
   required: true,
  },
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;

// I think restaurants are going to need an ID