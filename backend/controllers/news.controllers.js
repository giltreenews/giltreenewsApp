const model = require('../models/news.models')();

var newsController = function () { }

newsController.show = function (req, res, next) {

    model.find({}, (err, result) => {
        if (err) { console.log(err); }

        res.send(result);
        console.log(result);

    }).sort( { publishedAt: -1 } );
};


newsController.showLimitThree = function (req, res, next) {

    model.find({}, (err, result) => {
        if (err) { console.log(err); }

        res.send(result);
        console.log(result);

    }).sort( { publishedAt: -1 } ).limit(3);
};

newsController.showLimitTwenty = function (req, res, next) {

    model.find({}, (err, result) => {
        if (err) { console.log(err); }

        res.send(result);
        console.log(result);

    }).sort( { publishedAt: -1 } ).limit(5);
};

newsController.showOne = function (req, res) {
    let id = req.params.id;
    model.findById(id, (err, result) => {
        if (err) { console.log(err); }
        console.log(result.title);
        
        result.save();
        
        res.json(result);
    
    });

}

newsController.showOneAny = function (req, res) {
    
    model.findOne({}, (err, result) => {
        if (err) { console.log(err); }
        console.log(result.title);
        
        result.save();
        
        res.json(result);
    
    }).sort( { publishedAt: -1 } );

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
    
     newsController.searchByCategory = function (req, res, next) {
        const category= req.params.category;
        model.find({category: category}, (err, result) => {
            if (err) { console.log(err); }
            res.send(result);
        }).sort( { publishedAt: -1 } );
    };


module.exports = newsController;