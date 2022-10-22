//In real project, never expose your credential in the code


let atlasDB = "mongodb+srv://DBUSER:d2Mw9hV9lmfZGNGO@cluster005.6qzkkeo.mongodb.net/Products?retryWrites=true&w=majority";


let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
    });

    return mongodb;
}