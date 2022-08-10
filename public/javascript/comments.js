async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

  const comment_id = window.location.toString().split('/')[
    window.location.toString().split('/').length -1
  ];
  console.log(comment_text, comment_id);
  }

  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);


  
     
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