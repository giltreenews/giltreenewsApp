var model = require('../models/user.models');
const jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");


var userControllers = function () { }

const accessTokenSecret = 'bzQfJfIfxTEnb3El';

userControllers.register = function (req, res, next) {
    const user = req.body;
    model.findOne({email: user.email},(err, userFound) => {
        if(userFound){
            return res.status(409).send('user already exist');
        }
        model.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: bcrypt.hashSync(req.body.password, 6),
            email: req.body.email,
            role: req.body.role,
            preferences: req.body.preferences
    
          }, (err, result) => {
              
            if(err) { 
                console.log(err)
            }
            res.send(result)
        })
    });
    

}

userControllers.login = function (req, res) {
    const loginInfo = req.body;
    model.findOne({email: loginInfo.email}, (err, user) => {
        if(err) {
            res.status(401).send('wrong email or password');
            return;
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
          );
        if(!user || !passwordIsValid){
            res.status(401).send('wrong email or password');
            return;
        }

        const accessToken = jwt.sign({ email: user.email,  role: user.role }, accessTokenSecret);
        user.password = undefined;
        res.send({user, accessToken});
    })
} 





module.exports = userControllers;