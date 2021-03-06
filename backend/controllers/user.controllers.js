var model = require('../models/user.models');
const jwt = require('jsonwebtoken');

var userControllers = function () { }

const accessTokenSecret = 'bzQfJfIfxTEnb3El';

userControllers.register = function (req, res) {
    const user = req.body;

    model.create(user, (err, result) => {
        if(err) { 
            console.log(err)
        }
        res.send(result)
    })
}

userControllers.login = function (req, res) {
    const loginInfo = req.body;
    model.findOne({email: loginInfo.email}, (err, user) => {
        if(err) {
            res.status(401).send('wrong email or password');
            return;
        }
        if(!user || user.password !== loginInfo.password){
            res.status(401).send('wrong email or password');
            return;
        }

        const accessToken = jwt.sign({ email: user.email,  role: user.role }, accessTokenSecret);
        user.password = undefined;
        res.send({user, accessToken});
    })
} 





module.exports = userControllers;