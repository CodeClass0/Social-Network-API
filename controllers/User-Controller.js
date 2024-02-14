const {User,Thought} = require("../models");


module.exports = {
    
    async getUsers (req, res){
        try {
            const users = await User.find();
              res.json(users);
          } catch (err) {
            res.status(500).json(err);
          }
    },
    async createUser(req, res) {
      try {
        const users = await User.create(req.body);
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      };
    },
};