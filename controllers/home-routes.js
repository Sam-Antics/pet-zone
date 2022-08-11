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

//renders staff page
router.get("/staffportal", (req, res) => {
  if (req.session.staffLoggedIn) {
    res.redirect("staffdashboard")
  }
  res.render("staff");
})

//render and redirects to staff dashboard but need to fix issue being able to route to staffdashboard with a button
router.get("/staffdashboard", (req, res) => {
  if (!req.session.staffLoggedIn) {
    res.redirect('/staffportal')
  }
  res.render("staffdashboard")
})

//comment routes -- not sure what this one does.. was able to comment this one out and the one in the dashboard routes is the one that allows rendering.
// router.get("/comments/:id", (req, res) => {
//   //    res.render('comments');
//   Comment.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ["id", "title", "comment_text", "created_at", "user_id"],
//     include: [
//       {
//         model: User,
//         attributes: ["email"],
//       },
//     ],
//   })
//     .then((dbCommentData) => {
//       if (!dbCommentData) {
//         res.status(404).json({ message: "No comments found" });
//         return;
//       }
//       const comment = dbCommentData.get({ plain: true });
//       res.render("comments", { comment });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


module.exports = router;
