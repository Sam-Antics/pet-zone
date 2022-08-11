const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, (req, res) => {
//     res.render('dashboard', {
//         loggedIn: req.session.loggedIn
//     })
// });


//fix route to be able to render comments in dashboard
router.get('/', withAuth, (req, res) => {
    Comment.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'comment_text',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['email']
        }
      ]
    })
      .then(dbCommentData => {
        // serialize data before passing to template
        const comments = dbCommentData.map(comments => comments.get({ plain: true }));
        res.render('dashboard', { comments, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;