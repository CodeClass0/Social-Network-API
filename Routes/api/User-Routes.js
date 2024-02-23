const router = require('express').Router();

const {
    getUsers,
    createUser,
    getSingleUser,
    putUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/User-Controller');

// /api/users GET all and POST 
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .put(putUser)
    .delete(deleteUser);

router.route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;