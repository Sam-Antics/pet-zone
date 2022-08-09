const router = require("../../controllers/home-routes");

     
// router.get('/comments', (req, res) => {
//     const comment = {
//       id: 1,
//       comment_text: 'https://handlebarsjs.com/guide/',
//       title: 'Handlebars Docs',
//       created_at: new Date(),

//       user: {
//         user: 'email@sample.com'
//       }

//     };

  //  res.render('comments', { comment });
// });

// router.get('/', (req, res) => {
//      Comment.findAll({
//             where: {
//             id: req.params.id
//             },
//             attributes: [
//                 'id',
//                 'comments_text',
//                 'created_at'
//             ],
//             include: [
//                 {
//                 model: User,
//                 attributes: ['email']
//                 }
            
//         ]
//     })
//     .then(dbCommentData => {
//         if (!dbPostData) {
//             res.status(404).json({ message: "No comments found" });
//             return;
//         }
//         const comment = dbCommentData.get({ plain: true });
//         res.render('comments', { comment });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });