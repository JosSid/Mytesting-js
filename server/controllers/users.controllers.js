const userModel = require('../models/users.js')

module.exports = {
    getAllUsers: async function(req, res, next) {
        try {
          let users = await userModel.find();
          res.json({users});
        } catch(e) {
          next(e.message);
        }
      
      }
}