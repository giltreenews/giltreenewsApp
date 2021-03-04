const roleCheck = (req, res, next) => {
    const user = req.user

    if (user && user.role === 'JOURNALIST') {
            next();
        }else {
        res.sendStatus(403);
    }
};

module.exports = roleCheck