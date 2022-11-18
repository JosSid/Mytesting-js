const userModel = require('../models/users');

module.exports = {
    getAllUsers: async function (req, res, next) {
        try {
            let users = await userModel.find();
            res.json({ users });
        } catch (e) {
            next(e.message);
        }
    },
    createUser: async function(req, res, next) {
        try {
            let createdUser = await userModel.create(req.body)
            res.json({user: createdUser})
        } catch (e) {
            // que pasa si peta la DB???
        }
    }
}