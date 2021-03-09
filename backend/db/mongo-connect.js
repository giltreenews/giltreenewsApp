const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
let db;

module.exports = function connection(){
    mongoose.set('useCreateIndex', true);
    if(!db){
        db = mongoose.createConnection('mongodb+srv://softeam:softeamgiltreenews@giltreenews.idrvn.mongodb.net/giltreenews?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    return db;
}
