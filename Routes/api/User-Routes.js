const router = require('express').Router();

const {
    getUsers,
    createUser,
} = require('../../controllers/User-Controller');

// /api/users GET all and POST 
router.route('/')
.get(getUsers)
.post(createUser);

module.exports = router;