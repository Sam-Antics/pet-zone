const router = require('express').Router();

const apiRoutes = require('./api/');
const loginRoutes = require('./login-routes');
const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');

const { use } = require('./api/');

router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;