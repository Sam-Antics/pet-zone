const router = require('express').Router();
const { Pet, Owner, User } = require('../../models/pets');

//gets all pets
router.get('/', (req, res) => {
    Pet.findAll()
        .then(dbPetData => res.json(dbPetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//gets a single pet by id
router.get('/:id', (req, res) => {
    Pet.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Owner,
                attributes: ['user_id'],
                include: {
                    model: User,
                    attributes: ['first_name', 'Last_name']
                }

            }
        ]
    })
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet was found with this id'});
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//allows a pet to be added to the database
router.post('/', (req, res) => {
    Pet.create({

    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//allows an update on a pet
router.put('/:id', (req, res) => {
    Pet.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbPetData =>{
        if(!dbPetData) {
            res.status(404).json({ message: 'No pet was found with this id'});
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//allows a pet to be deleted from the database
router.delete('/:id', (req, res) => {
    Pet.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet was found with this id'});
            return;
        }
        res.json(dbPetData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;