const router = require("express").Router();
const { Comment, User, Pet } = require("../../models");
const { findAll } = require("../../models/users");

router.get("/", (req, res) => {
  Comment.findAll({
    attributes: ["id", "title", "comment_text"],
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new comments
router.post("/", (req, res) => {
    Comment.create({
      title: req.body.title,
      comment_text: req.body.comment_text,
      //user_id: req.body.user_id,
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });

});

router.get("/", (req, res) => {
  Comment.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "comment_text",
      "title",
      "created_at",
    
    ],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbCommentData) => {
      // serialize data before passing to template
      const posts = dbCommentData.map((post) => comment.get({ plain: true }));
      res.render("comments", { comment, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
