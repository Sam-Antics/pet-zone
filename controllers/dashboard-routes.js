const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn
    });
});


module.exports = router;