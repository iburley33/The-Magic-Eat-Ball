const User  = require('../models/User');
const { signToken } = require('../utils/auth');

module.exports = {

    // login user
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
    
        const correctPw = await user.isCorrectPassword(body.password);
    
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
      },


    // create new user
    async createUser({ body }, res) {
        const user = await User.create(body);
    
        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
      },


    // logout user




};