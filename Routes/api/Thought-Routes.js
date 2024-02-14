const router = require('express').Router();

const {
    getThoughts,
} = require('../../controllers/Thought-Controller');

// /api/courses
router.route('/')
.get(getThoughts)
// .post(createThought);

module.exports = router;