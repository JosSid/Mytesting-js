var express = require('express');
var router = express.Router();

const userModel = require('../models/users');

const usersController = require('../controllers/users.controllers.js')
/* GET users listing. */
router.get('/', usersController.getAllUsers);

/* GET user by id. */
// TODO moverlo a users.controllers.js
router.get('/:id', async function(req, res, next) {
  try {
    let user = await userModel.findOne(req.params.id);
    if (user) {
      res.json({user});
    } else {
      next(new Error('User not found'))
    }
  } catch(e){
    next(e.message);
  }
});

/* POST Create a new user */
router.post('/', usersController.createUser)
/* PUT Edit a user by id */

/* DELETE Deletes a user by id */

module.exports = router;
