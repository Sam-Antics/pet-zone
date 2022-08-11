const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Owner, Pet, Staff } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('staffportal', {
        loggedIn: req.session.loggedIn
    })
});


module.exports = router;