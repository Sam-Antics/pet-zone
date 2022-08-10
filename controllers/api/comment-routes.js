const router = require('express').Router();
const { Comment, User, Pet } = require('../../models');
const { findAll } = require('../../models/users');

router.get('/', (req, res) => {
Comment.findAll({
    attributes: ['id', 'title', 'comment_text'],
    
})
.then(dbCommentData => res.json(dbCommentData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

//create new comments
router.post('/', (req, res) => {
    if (req.session) {
        Comment.create({
    comment_text: req.body.comment_text,
    title: req.body.title,
    user_id: req.body.user_id,  
    user_id: req.session.user_id  
})
.then (dbCommentData => res.json(dbCommentData))
.catch(err => {
    console.log(err);
    res.status(400).json(err);
    });
}
});


module.exports = router;