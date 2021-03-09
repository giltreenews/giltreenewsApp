const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
let db;

module.exports = function connection(){
    mongoose.set('useCreateIndex', true);
    if(!db){
        db = mongoose.createConnection('mongodb://localhost/giltreenews', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    return db;
}
