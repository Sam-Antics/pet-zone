const router = require('express').Router();
const { Immunization } = require('../../models/immunizations');

//gets all immunization
router.get('/', (req, res) => {
    Immunization.findAll({})
        .then(dbImmunizationData => res.json(dbImmunizationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//gets a immunization by id
router.get('/:id', (req, res) => {
    Immunization.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbImmunizationData => {
            if (!dbImmunizationData) {
                res.status(404).json({ message: 'No immunization found with this id' });
                return;
            }
            res.json(dbImmunizationData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//adds an immunization into the database
router.post('/', (req, res) => {
    Immunization.create({

    })
        .then(dbImmunizationData => res.json(dbImmunizationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//deletes a immunization from the database
router.delete('/:id', (req, res) => {
    Immunization.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbImmunizationData => {
        if (!dbImmunizationData) {
            res.status(404).json({ message: 'No Immunization found with this id'});
            return;
        }
        res.json(dbImmunizationData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});