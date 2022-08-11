const router = require("express").Router();
const sequelize = require("../config/connection");
const { Comment, User } = require("../models");

router.get("/", (req, res) => {
  res.render("landing", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/staffportal", (req,res) => {
  res.render("staffportal");
})

//comment routes
router.get("/comments/:id", (req, res) => {
  //    res.render('comments');
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "comment_text", "created_at", "user_id"],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comments found" });
        return;
      }
      const comment = dbCommentData.get({ plain: true });
      res.render("comments", { comment });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
  Comment.FindAll({
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
      const comments = dbCommentData.map((comment) => comment.get({ plain: true }));
      res.render("comments", { comments, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
