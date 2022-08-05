const router = require('express').Router();
const { Owner } = require('../../models');

//gets all owners
router.get('/', (req, res) => {
    User.findAll({
        attributes: [
         'user_id',
         'pet_id'   
        ]
    })
        .then(dbOwnerData => res.json(dbOwnerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//gets owner by id
// router.get('/:id', (req, res) => {
//     User.findOne({
//         attributes: { exclude: ['password'] },
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbOwnerData => {
//             if (!dbOwnerData) {
//                 res.status(404).json({ message: 'No Owner found with this id' });
//                 return;
//             }
//             res.json(dbOwnerData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router; 