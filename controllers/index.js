const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const staffPortalRoutes = require('./staffportal-routes');
// const loginRoutes = require('./login-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/staffportal', staffPortalRoutes);
// router.use('/login', loginRoutes);



router.use('*', (req, res) => {
    res.render('404-page')
})

module.exports = router;