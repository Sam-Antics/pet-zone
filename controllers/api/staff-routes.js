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

//login route for a staff
router.post('/login', (req, res) => {
    // expects { "email": "voldemort@gmail.com", "password": "password1234"}
    Staff.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with that email address!' });
                return;
            }
            const validPassword = dbUserData.checkPassword(req.body.password);
            if (!validPassword) {
                res.status(404).json({ message: 'Incorrect password!' });
                return;
            }
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: 'You are now logged in!' });
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