const router = require('express').Router();
const { Staff, User } = require('../../models');
// const managerAuth = require('../../utils')


//gets all staff
router.get("/", (req, res) => {
    Staff.findAll({
        include: {
            model: User
        }
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

//login route for a staff
router.post('/login', (req, res) => {
    Staff.findOne({
        where: {
            staff_email: req.body.staff_email,
            password: req.body.password
        }
    })
        .then(dbStaffData => {
            if (!dbStaffData) {
                res.status(404).json({ message: 'No Staff with that email address!' });
                return;
            }
            req.session.save(() => {
                req.session.user_id = dbStaffData.id;
                req.session.staff_email = dbStaffData.staff_email;
                req.session.staffLoggedIn = true;

                res.json({ user: dbStaffData, message: 'You are now logged in!' });
            });
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