const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard')
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router