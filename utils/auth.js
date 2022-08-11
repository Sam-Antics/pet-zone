const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};



// const managerAuth = (req, res, next) => {
//     if (req.session.user_id != 6) {
//         res.json ({ message: 'You are not Authorize'})
//         reload();
//     } else {
//         next();
//     }
// };

module.exports = withAuth;