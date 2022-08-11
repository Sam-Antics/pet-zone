const router = require('express').Router();

const userRoutes = require('./user-routes');
const staffRoutes = require('./staff-routes');
const petRoutes = require('./pets-routes');
const commentRoutes = require('./comment-routes');
// const immunizationRoutes = require('./immunizations-routes');
const ownerRoutes = require('./owner-routes');

router.use('/users', userRoutes);
router.use('/staff', staffRoutes);
router.use('/pets', petRoutes);
// router.use('/immunizations', immunizationRoutes);
router.use('/owners', ownerRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
