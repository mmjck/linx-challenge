const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        autoIndex:false,

    },
);

const db = mongoose.connection;


module.exports = db;
