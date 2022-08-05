const router = require('express').Router();
const { Staff } = require('../../models');

//gets all staff
router.get("/", (req, res) => {
    Staff.findAll({
    })
    .then(dbStaffData => res.json(dbStaffData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//gets staff by id
router.get("/:id", (req, res) => {
    Staff.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbStaffData => {
        if (!dbStaffData) {
            res.status(404).json({ message: 'No staff member found with this id' });
            return;
        }
        res.json(dbStaffData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// gives the ability to add a staff member
router.post('/', (req, res) => {
    // expects { "title": "title"}
    Staff.create({
        title: req.body.title,
        // need help to figure how to link the UserId
    })
    .then(dbStaffData => res.json(dbStaffData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// updates a staff's member title by Id
router.put('/:id', (req, res) => {
    Staff.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbStaffData => {
        if (!dbStaffData) {
            res.status(404).json({ message: 'No staff member found with this id'});
            return;
        }
        res.json(dbStaffData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a staff member from the database
router.delete('/:id', (req, res) => {
    Staff.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbStaffData => {
        if (!dbStaffData) {
            res.status(404).json({ message: 'No staff member found with this id'});
            return;
        }
        res.json(dbStaffData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;