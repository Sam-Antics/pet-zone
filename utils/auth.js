const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;


// const managerAuth = (req, res, next) => {
//     if (!req.session.staff:6) {
//         res.json ({ message: 'You are not Authorize'})
//         reload();
//     } else {
//         next();
//     }
// };