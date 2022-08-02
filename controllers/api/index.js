const router = require('express').Router();
const userRoutes = require('./user-routes');
const staffRoutes = require('./staff-routes');
const petRoutes = require('./pets-routes');
const immunizationRoutes = require('./immunizations-routes');

router.use('/users', userRoutes);
router.use('/staff', staffRoutes);
router.use('/pets', petRoutes);
router.use('/immunizations', immunizationRoutes);

module.exports = router;