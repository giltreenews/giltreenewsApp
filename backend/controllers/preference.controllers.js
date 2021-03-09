const userModel = require('../models/user.models');

var preferenceController = function () { }



preferenceController.add = function (req, res) {
    const preferences = req.body.preferences;
    const user= req.user;
    userModel.findOne({email: req.user.email}, (err, user) => {
        if(err) {console.error(err)}
        user.preferences  = preferences
        user.save();
        user.password = undefined;
        res.send(user)
    });
};

module.exports = preferenceController;

