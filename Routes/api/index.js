const router = require('express').Router();
const thoughtRoutes = require('./Thought-Routes');
const userRoutes = require('./User-Routes');


router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
