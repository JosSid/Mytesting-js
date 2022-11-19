var express = require('express');
var router = express.Router();

const userModel = require('../models/users');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let users = await userModel.find();
    res.json({users});
  } catch(e) {
    next(e.message);
  }

});

/* GET user by id. */
router.get('/:id', async function(req, res, next) {
  try {
    let user = await userModel.findOne(req.params.id);
    if (user) {
      res.json({user});
    } else {
      next(new Error('User not found'))
    }
  } catch(e) {
    next(e.message);
  }
});

/* POST Create a new user */

/* PUT Edit a user by id */

/* DELETE Deletes a user by id */

module.exports = router;
