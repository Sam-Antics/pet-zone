const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, User } = require('../models');

router.get('/', (req, res) => {
    res.render('landing', {
    })
})


//comment routes
router.get('/comments/:id', (req, res) => {
//    res.render('comments');

    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'comment_text',
            'created_at',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['email']
            }

        
    ]
})
.then(dbCommentData => {
    if (!dbCommentData) {
        res.status(404).json({ message: "No comments found" });

        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');

});

module.exports = router;