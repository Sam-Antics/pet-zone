const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, User } = require('../models');

router.get('/', (req, res) => {
    res.render('landing', {
    })
})


router.get('/comments', (req, res) => {
    Comment.findAll({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'comments_text',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['email']
            }

        ]
    })
        .then(dbCommentData => {
            if (!dbPostData) {
                res.status(404).json({ message: "No comments found" });
                return;
            }
            const comment = dbCommentData.get({ plain: true });
            res.render('comments', { comment });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard')
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');

});

module.exports = router;