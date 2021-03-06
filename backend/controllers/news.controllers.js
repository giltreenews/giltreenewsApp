const model = require('../models/news.models');

var newsController = function () { }

    newsController.show = function (req, res, next) {
        const limit = req.body.limit
        const category = req.body.category
        let filter = {}
        if(category){
            filter = {category: category}
        }
        if(limit){
            model.find(filter, (err, result) => {
                if (err) { console.log(err); }
                res.send(result);
                console.log(result);
            }).sort( { publishedAt: -1 } ).limit(limit);
        }else{
            model.find(filter, (err, result) => {
                if (err) { console.log(err); }
                res.send(result);
                console.log(result);
            }).sort( { publishedAt: -1 } );
        }
    };

    newsController.showOne = function (req, res) {
        let id = req.params.id;
        model.findById(id, (err, result) => {
        if (err) { console.log(err); }
        console.log(result.title);
        result.save();
        res.json(result);
        }).populate("comments");
    }
    
    newsController.delete = function (req, res) {
        let id = req.params.id;
        model.deleteOne({ _id: id }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(404).send({ message: "Not found article with id " + id });
            }
            res.send()
        });
    }

    newsController.save = function (req, res) {
        //if (req.body.id == 0) {
         var body = req.body;
            body.status = false;
            model.create(body, (err, result) => {
                if (err) { console.log(err); }
                res.send(result);
                console.log(result)
            });
    }
    //};

    newsController.update = function (req, res) {
         var body = req.body;
            model.updateOne({ _id: body._id }, {
            $set: body
            }, (error, result) => {
             if (error)
                throw error;
             res.send(result);
            });
     };

     newsController.search = function (req, res, next) {
        var search = req.body.search;
        model.find({$text: {$search: `${search}` }}, {score: {$meta: "textScore"}},
        (err, result) => {
            if (err) { console.log(err); }
          
            res.send(result);
            
        }).sort({score:{$meta:"textScore"}});
    };

     module.exports = newsController;