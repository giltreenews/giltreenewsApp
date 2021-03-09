var mongoose = require('mongoose');
const newsModel = require('../models/news.models');
const userModel = require('../models/user.models');
const commentsModel = require('../models/comments.models');

var commentsController = function () { }



commentsController.add = function (req, res) {

       
        const articleId = req.params.articleId;
        var comment = req.body;
        newsModel.findById(articleId, (err,news) => {
            if(err) {
                console.error(err)
                return res.status(404).send('article non trouvé')
            }
            if(!news){
                return res.status(404).send('article non trouvé')
            }
            comment.articleId = articleId;
            comment.createdAt = new Date(Date.now());
            userModel.findOne({email: req.user.email}, (err, user) => {
                if(err) {console.error(err)}
                user.password = undefined;
                comment.user = user;
                commentsModel.create(comment, (err, createdComment) =>{
                    if(err) {
                        console.error(err)
                        return
                    }

                    if(!news.comments){
                        console.log('hamid')
                        news.comments = [];
                    }
                    news.comments.push(createdComment._id);
                    news.save();
                    res.send(createdComment);
                })
               
            })

        
            // news.save();

    })
    }
commentsController.addAnswer = function (req, res) {
    const idComments = req.params.id;
    const answer = req.body.content;
    const user = req.user
    commentsModel.findOne({ _id: idComments }, (err, comment) => {
        if (err) { throw err }
        if (!comment) { return res.status(404) }
        userModel.findOne({ email: user.email }, (err, userInBd) => {
            if (err) { throw err }
            userInBd.password = undefined;
            comment.answer = {
                content: answer,
                createdAt: new Date(),
                user: userInBd
            }
            comment.save()
            res.send(comment)
        })

    })
          

       
               
         

        
    }
    
    commentsController.getById = function (req, res) {
        let id = req.params.id;
        commentsModel.findById(id, (err, result) => {
            if (err) { console.log(err); }
            
            res.json(result);
        
        });
    
    }
   
module.exports = commentsController;